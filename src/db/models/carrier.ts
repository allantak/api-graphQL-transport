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
    @Column({ nullable: true })
    email: string;

    @Field()
    @Column({ nullable: true })
    phone: string;

    @Field(() => User)
    user: User;

    @ManyToOne(() => User, user => user.carrierConnection)
    @JoinColumn({ name: 'user_id' })
    userConnection: Promise<User>;


    @OneToMany(() => BodyWork, bodyWork => bodyWork.carrierConnection)
    bodyWorkConnection: Promise<BodyWork[]>
    @Field(() => [BodyWork])
    bodyWorks: BodyWork[];
}
