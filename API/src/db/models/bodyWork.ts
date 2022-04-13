/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Carrier from './carrier';
import Freight from './freght';

@ObjectType()
@Entity("bodyWorks")
export default class BodyWork {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable: true})
  @Column()
  carrier_id: number;

  @Field({nullable: true})
  @Column()
  freight_id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Freight)
  freight: Freight;

  @Field(() => Carrier)
  carrier: Carrier;

  @ManyToOne(() => Carrier, carrier => carrier.bodyWorkConnection)
  @JoinColumn({ name: 'carrier_id' })
  carrierConnection: Promise<Carrier>;

  @ManyToOne(() => Freight, freight => freight.bodyWorkConnection)
  @JoinColumn({ name: 'freight_id' })
  freightConnection: Promise<Freight>;
}
