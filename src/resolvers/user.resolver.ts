/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from 'src/db/models/user';
import RepoService from 'src/repo.service';
import UserInput from './input/user.input';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';



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

    @Query(() => User)
    public async authenticatedUser(@Args('data') input: UserInput): Promise<User> {
        const user = await this.getUserEmail(input.email);
        const isPasswordMatching = await bcrypt.compare(input.password, user.password);
        if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
        return user
    }
}
