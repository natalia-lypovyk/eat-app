import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Contains, IsString, MinLength } from 'class-validator';

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
  @MinLength(30, {
    message: 'Description is too short',
  })
  public description: string;

  @Column()
  @IsString()
  @Contains('$')
  public price: string;
}
