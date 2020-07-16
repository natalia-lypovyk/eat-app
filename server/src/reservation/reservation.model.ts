import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';

@Entity()
export class Reservation {
  @ObjectIdColumn()
  @Exclude({ toPlainOnly: true })
  public _id?: string;

  @Column()
  @IsString()
  public id: string;

  @Column()
  @IsString()
  public guestsQuantity: string;

  @Column()
  @IsString()
  public orderDate: string;

  @Column()
  @IsString()
  public orderTime: string;
}
