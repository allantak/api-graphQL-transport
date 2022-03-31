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
} from 'typeorm';
import BodyWork from './bodyWork';
import User from './user';

@ObjectType()
@Entity('carriers')
export default class Carrier {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    carrier: string;

    @Field()
    @Column()
    service: string;

    @Field()
    @Column()
    company: string;

    @Field()
    @Column('real')
    price: number;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    phone: string;

    @Field()
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.carrierConnection)
    userConnection: Promise<User>;

    @OneToMany(() => BodyWork, bodyWork => bodyWork.carrierConnection)
    bodyWorkConnection: Promise<BodyWork[]>
}
