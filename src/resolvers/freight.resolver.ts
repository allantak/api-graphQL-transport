/* eslint-disable prettier/prettier */
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import Freight from 'src/db/models/freght';
import User from 'src/db/models/user';
import RepoService from 'src/repo.service';
import FreightInput from './input/freight.input';


@Resolver(() => Freight)
class FreightResolver {
    constructor(private readonly repoService: RepoService) { }

    @Query(() => [Freight])
    public async getFreights(): Promise<Freight[]> {
        return this.repoService.freightRepo.find();
    }

    @Mutation(() => Freight)
    public async createFreight(@Args('data') input: FreightInput): Promise<Freight> {
        const freight = this.repoService.freightRepo.create({
            user_id: input.user_id,
            origin: input.origin,
            destination: input.destination,
            price: input.price,
            product: input.product,
            weight: input.weight,
            species: input.species,
            note: input.note
        });
        return this.repoService.freightRepo.save(freight);
    }

    @ResolveField(() => User)
    public async user(@Parent() parent): Promise<User> {
        return this.repoService.userRepo.findOne(parent.user_id);
    }
}

export default FreightResolver;
