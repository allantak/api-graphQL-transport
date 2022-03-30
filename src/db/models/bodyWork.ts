/* eslint-disable prettier/prettier */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  } from 'typeorm';
import Carrier from './carrier';
import Freight from './freght';
  
  @Entity('bodyWorks')
  export default class BodyWork {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @ManyToOne( () => Carrier, carrier => carrier.bodyWorkConnection)
    carrierConnection: Promise<Carrier>;

    @ManyToOne(()=> Freight, freight => freight.bodyWorkConnection)
    freightConnection: Promise<Freight>;
  }
  