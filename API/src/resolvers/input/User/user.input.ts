/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;

    @Field()
    readonly permission: string;
}