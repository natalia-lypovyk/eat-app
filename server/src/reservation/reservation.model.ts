import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsNumberString, IsString, MaxLength } from 'class-validator';

@Entity()
export class Reservation {
  @ObjectIdColumn()
  @Exclude({ toPlainOnly: true })
  public _id?: string;

  @Column()
  @IsString()
  public id: string;

  @Column()
  @IsNumberString()
  @MaxLength(1, {
    message: 'Too  much guests! You can order a table up to 10 persons',
  })
  public guestsQuantity: string;

  @Column()
  @IsString()
  public orderDate: string;

  @Column()
  @IsString()
  public orderTime: string;
}
