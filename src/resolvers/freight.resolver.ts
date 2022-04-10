/* eslint-disable prettier/prettier */
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import Freight from 'src/db/models/freght';
import User from 'src/db/models/user';
import RepoService from 'src/repo.service';
import DeleteFreightInput from './input/Freight/deleteFreight.input';
import FreightInput from './input/Freight/freight.input';
import SearchFreightInput from './input/Freight/searchFreight.input';
import BodyWork from 'src/db/models/bodyWork';
import { Like } from 'typeorm';


@Resolver(() => Freight)
class FreightResolver {
    constructor(private readonly repoService: RepoService) { }

    @Query(() => [Freight])
    public async getFreights(): Promise<Freight[]> {
        return this.repoService.freightRepo.find();
    }

    @Query(() => [Freight])
    public async searchFreight(@Args('data') input: SearchFreightInput): Promise<Freight[]> {
        return await this.repoService.freightRepo.find({
            where: {
                origin: Like(`%${input.origin}$`),
                destination: Like(`%${input.destination}%`),
                product: Like(`%${input.product}%`),
                tracker_flag: input.tracker_flag,
                agencying_flag: input.agencying_flag
            },
        })
    }

    

    @Mutation(() => Freight)
    public async createFreight(@Args('data') input: FreightInput): Promise<Freight> {
        const freight = await this.repoService.freightRepo.create({
            user_id: input.user_id,
            origin: input.origin,
            destination: input.destination,
            price: input.price,
            product: input.product,
            weight: input.weight,
            species: input.species,
            note: input.note
        });
        const saveFreight = await this.repoService.freightRepo.save(freight);
        const bodyWork = await this.repoService.bodyWorkRepo.create({
            freight_id: freight.id,
            name: input.nameBodyWork,
        })
        await this.repoService.bodyWorkRepo.save(bodyWork)
        return saveFreight
    }

    @Mutation(() => Freight)
    public async deleteFreight(@Args('data') input: DeleteFreightInput): Promise<Freight> {
        const freight = await this.repoService.freightRepo.findOne({ where: { id: input.id } })
        if (!freight || freight.user_id !== input.user_id)
            throw new Error(
                'Freight does not exists or you are not the freight user',
            );
        await this.repoService.freightRepo.remove(freight);

        return freight
    }

    @ResolveField(() => User)
    public async user(@Parent() parent): Promise<User> {
        return this.repoService.userRepo.findOne(parent.user_id);
    }

    @ResolveField(() => [BodyWork])
    public async bodyWorks(@Parent() parent): Promise<BodyWork[]>{
        return this.repoService.bodyWorkRepo.find({where: { freight_id: parent.id }})
    }

    
}

export default FreightResolver;
