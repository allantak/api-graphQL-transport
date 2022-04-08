/* eslint-disable prettier/prettier */
import { Field } from '@nestjs/graphql';
import { InputType } from "@nestjs/graphql";


@InputType()
export default class DeleteBodyWorkInput {
    @Field()
    id: number;

    @Field({ nullable: true })
    carrier_id: number;

    @Field({ nullable: true })
    freight_id: number;
}