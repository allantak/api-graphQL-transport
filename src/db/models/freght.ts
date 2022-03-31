/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import BodyWork from './bodyWork';
import User from './user';

@ObjectType()
@Entity('freights')
export default class Freight {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column('varchar')
  origin: string;

  @Field()
  @Column('varchar')
  destination: string;

  @Field()
  @Column('real')
  price: number;

  @Field()
  @Column()
  product: string;

  @Field()
  @Column('float')
  weight: number;

  @Field()
  @Column()
  species: string;

  @Field()
  @Column('text')
  note: string;

  @Field()
  @Column()
  tracker_flag: boolean;

  @Field()
  @Column()
  agencying_flag: boolean;

  @Field()
  @Column({ type: 'date' })
  delivery_date: Date;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.freightConnection)
  userConnection: Promise<User>

  @OneToMany(() => BodyWork, bodyWork => bodyWork.freightConnection)
  bodyWorkConnection: Promise<BodyWork[]>;
}
