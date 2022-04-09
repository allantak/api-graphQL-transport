/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import User from 'src/db/models/user';
import RepoService from 'src/repo.service';
import UserInput from './input/User/user.input';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
import SingInInput from './input/User/singIn.input';
import Freight from 'src/db/models/freght';
import Carrier from 'src/db/models/carrier';



@Resolver(() => User)
export default class UserResolver {

    constructor(private readonly repoService: RepoService) { }

    @Query(() => [User])
    public async getUsers(): Promise<User[]> {
        return this.repoService.userRepo.find();
    }

    @Query(() => User, { nullable: true })
    public async getUserEmail(@Args('email') email: string): Promise<User> {
        return this.repoService.userRepo.findOne({ where: { email: email } });
    }

    @Query(() => User)
    public async authenticatedUser(@Args('data') input: SingInInput): Promise<User> {
        const user = await this.getUserEmail(input.email);
        const isPasswordMatching = await bcrypt.compare(input.password, user.password);
        if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
        return user
    }

    @Mutation(() => User)
    public async createUser(@Args('data') input: UserInput): Promise<User> {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const user = this.repoService.userRepo.create({
            email: input.email,
            password: hashedPassword,
            permission: input.permission
        });
        return this.repoService.userRepo.save(user);
    }

    @Mutation(() => User)
    public async deleteUser(@Args('id') id: number): Promise<User> {
        const user = await this.repoService.userRepo.findOne({ where: { id: id } })
        return await this.repoService.userRepo.remove(user);
    }

    @ResolveField(() => [Freight])
    public async freights(@Parent() parent): Promise<Freight[]> {
        return this.repoService.freightRepo.find({where: {user_id: parent.id}});
    }

    @ResolveField(() => [Carrier])
    public async carriers(@Parent() parent): Promise<Carrier[]> {
        return this.repoService.carrierRepo.find({where: {user_id: parent.id}});
    }
}
