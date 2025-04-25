import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { hashSync } from 'bcrypt-ts';

@Entity({ name: 'user' })
export class User extends BaseEntity {

    @Column({
        type: 'varchar',
        length: 300,
        nullable: false
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 300,
        nullable: false,
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 300,
        nullable: false,
    })
    email: string;
}