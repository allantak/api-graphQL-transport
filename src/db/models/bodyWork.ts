/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import Carrier from './carrier';
import Freight from './freght';

@ObjectType()
@Entity('bodyWorks')
export default class BodyWork {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Carrier, carrier => carrier.bodyWorkConnection)
  carrierConnection: Promise<Carrier>;

  @ManyToOne(() => Freight, freight => freight.bodyWorkConnection)
  freightConnection: Promise<Freight>;
}
