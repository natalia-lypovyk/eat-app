import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Menu {
  @ObjectIdColumn()
  public _id?: string;

  @Column()
  public id: string;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public price: string;
}
