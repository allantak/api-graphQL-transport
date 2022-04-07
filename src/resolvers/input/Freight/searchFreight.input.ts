/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class SearchFreightInput {
    @Field({nullable: true})
    readonly origin: string;

    @Field({nullable: true})
    readonly destination: string;
    
    @Field({nullable: true})
    readonly price: number;
    
    @Field({nullable: true})
    readonly product: string;

    @Field({nullable: true})
    readonly tracker_flag: boolean;

    @Field({nullable: true})
    readonly agencying_flag: boolean;
}





