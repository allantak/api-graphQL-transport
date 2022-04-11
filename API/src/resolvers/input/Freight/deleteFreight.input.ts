/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class DeleteFreightInput {
    @Field()
    readonly id: number;

    @Field()
    readonly user_id: number;
}