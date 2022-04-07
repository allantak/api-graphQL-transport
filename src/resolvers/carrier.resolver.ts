/* eslint-disable prettier/prettier */
import  User  from 'src/db/models/user';
import { Parent, ResolveField } from '@nestjs/graphql';
import RepoService from 'src/repo.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Carrier from "src/db/models/carrier";
import SearchCarrierInput from './input/Carrier/searchCarrier.input';
import DeleteCarrierInput from './input/Carrier/deleteCarrier.input';
import CarrierInput from './input/Carrier/carrier.input';

@Resolver(() => Carrier)
class CarrierResolver {
    constructor(private readonly repoService: RepoService) { }

    @Query(() => [Carrier])
    public async getCarriers(): Promise<Carrier[]> {
        return this.repoService.carrierRepo.find();
    }

    @Query(() => [Carrier])
    public async searchCarrier(@Args('data') input: SearchCarrierInput): Promise<Carrier[]> {
        return this.repoService.carrierRepo.find({
            where: {
                carrier: input.carrier,
                service: input.service,
                company: input.company
            }
        });
    }

    @Mutation(() => Carrier)
    public async createCarrier(@Args('data') input: CarrierInput): Promise<Carrier> {
        const carrier = this.repoService.carrierRepo.create({
            user_id: input.user_id,
            carrier: input.carrier,
            service: input.service,
            company: input.company,
            price: input.price,
            email: input.email,
            phone: input.phone
        })
        return this.repoService.carrierRepo.save(carrier)
    }

    @Mutation(() => Carrier)
    public async deleteCarrier(@Args('data') input: DeleteCarrierInput): Promise<Carrier> {
        const carrier = await this.repoService.carrierRepo.findOne({ where: { id: input.id } })
        if (!carrier || carrier.user_id !== input.user_id)
            throw new Error(
                'Carrier does not exists or you are not the carrier user',
            );
        await this.repoService.carrierRepo.remove(carrier);

        return carrier
    }

    @ResolveField(() => User)
    public async user(@Parent() parent): Promise<User> {
        return this.repoService.userRepo.findOne(parent.user_id);
    }

}

export default CarrierResolver;