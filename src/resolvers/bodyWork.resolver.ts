/* eslint-disable prettier/prettier */
import RepoService from 'src/repo.service';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import BodyWork from "src/db/models/bodyWork";
import DeleteBodyWorkInput from './input/BodyWork/deletebodyWork.input';
import BodyWorkInput from './input/BodyWork/bodyWork.input';
import Carrier from 'src/db/models/carrier';
import Freight from 'src/db/models/freght';
import { ResolveField, Parent } from '@nestjs/graphql';


@Resolver(() => BodyWork)
export default class BodyWorkResolver {
    constructor(private readonly repoService: RepoService) { }

    @Query(() => BodyWork)
    public async getBodyWork(): Promise<BodyWork[]> {
        return this.repoService.bodyWorkRepo.find();
    }

    @Mutation(() => BodyWork)
    public async createBodyWork(@Args('data') input: BodyWorkInput): Promise<BodyWork> {
        const bodyWork = this.repoService.bodyWorkRepo.create({
            name: input.name,
            carrier_id: input.carrier_id,
            freight_id: input.freight_id
        })
        return this.repoService.bodyWorkRepo.save(bodyWork)
    }

    @Mutation(() => BodyWork)
    public async deleteBodyWork(@Args('data') input: DeleteBodyWorkInput): Promise<BodyWork> {
        const bodyWork = await this.repoService.bodyWorkRepo.findOne({ where: { id: input.id } })
        if (!bodyWork || bodyWork.carrier_id !== input.carrier_id || bodyWork.freight_id !== input.freight_id)
            throw new Error(
                'bodyWork does not exists or you are not the bodyWork user',
            );
        await this.repoService.bodyWorkRepo.remove(bodyWork);

        return bodyWork
    }

    @ResolveField(() => Freight)
    public async freight(@Parent() parent): Promise<Freight> {
        return this.repoService.freightRepo.findOne(parent.freight_id);
    }

    @ResolveField(() => Carrier)
    public async carrier(@Parent() parent): Promise<Carrier> {
        return this.repoService.carrierRepo.findOne(parent.carrier_id);
    }
}