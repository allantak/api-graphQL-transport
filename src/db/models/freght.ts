/* eslint-disable prettier/prettier */
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

@Entity('freights')
export default class Freight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column('varchar')
  origin: string;

  @Column('varchar')
  destination: string;

  @Column('real')
  price: number;

  @Column()
  product: string;

  @Column('float')
  weight: number;

  @Column()
  species: string;

  @Column('text')
  note: string;

  @Column()
  tracker_flag: boolean;

  @Column()
  agencying_flag: boolean;

  @Column({type: 'date'})
  delivery_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.freightConnection )
  userConnection: Promise<User>

  @OneToMany(() => BodyWork, bodyWork => bodyWork.freightConnection)
  bodyWorkConnection: Promise<BodyWork[]>;
}
