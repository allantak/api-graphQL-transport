/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class FreightInput {
    @Field()
    readonly user_id: number;

    @Field()
    readonly origin: string;

    @Field()
    readonly destination: string;

    @Field({ nullable: true })
    readonly price: number;

    @Field()
    readonly product: string;

    @Field()
    readonly weight: number;

    @Field()
    readonly species: string;

    @Field({ nullable: true })
    readonly note: string;

    @Field({ nullable: true })
    readonly tracker_flag: boolean;

    @Field({ nullable: true })
    readonly agencying_flag: boolean;

    @Field({ nullable: true })
    readonly delivery_date: Date;

}




