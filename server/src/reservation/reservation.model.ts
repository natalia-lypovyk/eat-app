import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Reservation {
  @ObjectIdColumn()
  public _id?: string;

  @Column()
  public id: string;

  @Column()
  public guestsQuantity: string;

  @Column()
  public orderDate: string;

  @Column()
  public orderTime: string;
}
