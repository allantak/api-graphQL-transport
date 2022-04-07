/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class DeleteCarrierInput {
    @Field()
    readonly id: number;

    @Field()
    readonly user_id: number;
}
