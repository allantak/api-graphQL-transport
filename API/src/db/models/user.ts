/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import Carrier from './carrier';
import Freight from './freght';

@ObjectType()
@Entity('users')
export default class User {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  password: string;

  @Field({ nullable: true })
  @Column()
  permission: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Freight, freight => freight.userConnection)
  freightConnection: Promise<Freight[]>;

  @OneToMany(() => Carrier, carrier => carrier.userConnection)
  carrierConnection: Promise<Carrier[]>

}
