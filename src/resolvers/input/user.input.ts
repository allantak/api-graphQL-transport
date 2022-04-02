/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
class UserInput {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;

    @Field()
    readonly permission: string;
}

export default UserInput;