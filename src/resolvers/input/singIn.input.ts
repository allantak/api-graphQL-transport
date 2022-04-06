/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
class SingInInput {
    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}

export default SingInInput;