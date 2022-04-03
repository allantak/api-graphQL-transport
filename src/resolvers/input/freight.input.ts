/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
class FreightInput {
    @Field()
    readonly user_id: number;
    
    @Field()
    readonly origin: string;

    @Field()
    readonly destination: string;
    
    @Field()
    readonly price: number;
    
    @Field()
    readonly product: string;
    
    @Field()
    readonly weight: number;
    
    @Field()
    readonly species: string;
    
    @Field()
    readonly note: string;
}


export default FreightInput;





