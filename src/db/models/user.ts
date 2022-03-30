/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Carrier from './carrier';

import Freight from './freght';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  permission: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Freight, freight => freight.userConnection)
  freightConnection: Promise<Freight[]>;

  @OneToMany(() => Carrier, carrier => carrier.userConnection)
  carrierConnection: Promise<Carrier[]>
}
