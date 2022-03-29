/* eslint-disable prettier/prettier */
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

@Entity()
export default class Carrier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    carrier: string;

    @Column()
    service: string;

    @Column()
    company: string;

    @Column('real')
    price: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne( () => User, user => user.carrierConnection)
    userConnection: Promise<User>;

    @OneToMany(() => BodyWork, bodyWork => bodyWork.carrierConnection)
    bodyWorkConnection: Promise<BodyWork[]>
}
