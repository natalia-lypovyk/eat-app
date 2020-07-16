import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Contains, IsString } from 'class-validator';

@Entity()
export class Menu {
  @ObjectIdColumn()
  @Exclude({ toPlainOnly: true })
  public _id?: string;

  @Column()
  @IsString()
  public id: string;

  @Column()
  @IsString()
  public title: string;

  @Column()
  @IsString()
  public description: string;

  @Column()
  @IsString()
  @Contains('$')
  public price: string;
}
