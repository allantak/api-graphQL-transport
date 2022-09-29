/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class UpdateCarrierInput {

    @Field()
    readonly id: number;

    @Field({ nullable: true })
    readonly user_id: number;

    @Field({ nullable: true })
    readonly carrier: string;

    @Field({ nullable: true })
    readonly service: string;

    @Field({ nullable: true })
    readonly company: string;

    @Field({ nullable: true })
    readonly price: number;

    @Field({ nullable: true })
    readonly email: string;

    @Field({ nullable: true })
    readonly phone: string;

    @Field({ nullable: true })
    readonly img: number;
}