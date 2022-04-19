/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UpdateFreightInput {
    @Field()
    readonly id: number;

    @Field({ nullable: true })
    readonly user_id: number;

    @Field({ nullable: true })
    readonly origin: string;

    @Field({ nullable: true })
    readonly destination: string;

    @Field({ nullable: true })
    readonly price: number;

    @Field({ nullable: true })
    readonly product: string;

    @Field({ nullable: true })
    readonly weight: number;

    @Field({ nullable: true })
    readonly species: string;

    @Field({ nullable: true })
    readonly note: string;

    @Field({ nullable: true })
    readonly email: string;

    @Field({ nullable: true })
    readonly phone: string;

    @Field({ nullable: true })
    readonly tracker_flag: boolean;

    @Field({ nullable: true })
    readonly agencying_flag: boolean;

    @Field({ nullable: true })
    readonly delivery_date: Date;
}
