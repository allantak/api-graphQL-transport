/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class SingInInput {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}