/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
class DeleteFreightInput {
    @Field()
    readonly id: number;

    @Field()
    readonly user_id: number;
}

export default DeleteFreightInput;