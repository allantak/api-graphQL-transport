/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn
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

  @Field({ nullable: true })
  @Column('real')
  price: number;

  @Field({ nullable: true })
  @Column()
  product: string;

  @Field({ nullable: true })
  @Column('float')
  weight: number;

  @Field({ nullable: true })
  @Column()
  species: string;

  @Field({ nullable: true })
  @Column('text')
  note: string;

  @Field({ nullable: true })
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column()
  phone: string;

  @Field({ nullable: true })
  @Column()
  tracker_flag: boolean;

  @Field({ nullable: true })
  @Column()
  agencying_flag: boolean;

  @Field({ nullable: true })
  @Column({ type: 'date' })
  delivery_date: Date;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.freightConnection)
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User>

  @OneToMany(() => BodyWork, bodyWork => bodyWork.freightConnection)
  @JoinColumn({ name: 'bodyWork_id' })
  bodyWorkConnection: Promise<BodyWork[]>;
}
