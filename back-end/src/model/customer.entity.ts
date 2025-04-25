import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'customer' })
export class Customer extends BaseEntity {

  @Column({ type: 'varchar', length: 300, nullable: true })
  name: string;

  @Column({ type: 'timestamptz' , nullable: true })
  birthday: Date;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  phone: string;

  @Column({ type: 'varchar', length: 300 })
  address: string;

  @Column({ type: 'jsonb', default: '[]' })
  matters: any[];
}