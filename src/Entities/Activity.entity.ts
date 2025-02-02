/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'activities' })
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @Column({ type: 'varchar', length: 50, nullable: false })
  title: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  status: boolean;
}
