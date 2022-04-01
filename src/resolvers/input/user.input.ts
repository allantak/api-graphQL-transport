/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
class userInput {
    @Field()
    readonly email: string;
}

export default userInput;