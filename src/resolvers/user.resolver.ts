/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from 'src/db/models/user';
import RepoService from 'src/repo.service';
import UserInput from './input/user.input';

@Resolver()
class UserResolver {
    
    constructor(private readonly repoService: RepoService) { }

    @Query(() => [User])
    public async users(): Promise<User[]> {
        return this.repoService.userRepo.find();
    }

    @Query(() => User, { nullable: true })
    public async user(@Args('id') id): Promise<User> {
        return this.repoService.userRepo.findOne(id);
    }

    @Mutation(() => User)
    public async createUser(@Args('data') input: User): Promise<UserInput> {
        const user = this.repoService.userRepo.create({
            email: input.email,
            password: input.password,
            permission: input.permission
        });
        return this.repoService.userRepo.save(user);
    }
}

export default UserResolver;
