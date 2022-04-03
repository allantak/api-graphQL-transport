/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from 'src/db/models/user';
import RepoService from 'src/repo.service';
import UserInput from './input/user.input';

@Resolver(() => User)
export default class UserResolver {
    
    constructor(private readonly repoService: RepoService) { }

    @Query(() => [User])
    public async users(): Promise<User[]> {
        return this.repoService.userRepo.find();
    }

    @Query(() => User, { nullable: true })
    public async user(@Args('id') id:number): Promise<User> {
        return this.repoService.userRepo.findOne({where: { id: id}});
    }

    @Mutation(() => User)
    public async createUser(@Args('data') input: UserInput): Promise<User> {
        const user = this.repoService.userRepo.create({
            email: input.email,
            password: input.password,
            permission: input.permission
        });
        return this.repoService.userRepo.save(user);
    }
}
