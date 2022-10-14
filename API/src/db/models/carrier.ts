/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
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
    user_id: number;

    @Field()
    @Column()
    carrier: string;

    @Field()
    @Column()
    service: string;

    @Field({ nullable: true })
    @Column()
    company: string;

    @Field({ nullable: true })
    @Column('real')
    price: number;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    phone: string;

    @Field({ nullable: true })
    @Column()
    img: string;

    @ManyToOne(() => User, user => user.carrierConnection)
    @JoinColumn({ name: 'user_id' })
    userConnection: Promise<User>;

    @OneToMany(() => BodyWork, bodyWork => bodyWork.carrierConnection)
    @JoinColumn({ name: 'bodyWork_id' })
    bodyWorkConnection: Promise<BodyWork[]>
}
