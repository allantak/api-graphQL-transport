/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class CarrierInput {
    @Field()
    readonly user_id: number;

    @Field()
    readonly carrier: string;

    @Field()
    readonly service: string;

    @Field({ nullable: true })
    readonly company: string;

    @Field({ nullable: true })
    readonly price: number;

    @Field()
    readonly email: string;

    @Field()
    readonly phone: string;

}