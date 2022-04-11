/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export default class SearchCarrierInput {

    @Field({ nullable: true })
    readonly carrier: string;

    @Field({ nullable: true })
    readonly service: string;

    @Field({ nullable: true })
    readonly company: string;

    @Field({ nullable: true })
    readonly price: number;
}