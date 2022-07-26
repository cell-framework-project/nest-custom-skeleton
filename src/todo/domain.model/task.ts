import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskTitle } from "./task.title";

@Entity({name:'task'})
export class Task {

  @PrimaryGeneratedColumn('uuid')
  readonly id:string;

  @Column( ()=> TaskTitle,{ prefix:false } )
  readonly title:TaskTitle;

  @Column({ name:'creation_date_time' } )
  readonly creationDateTime:Date;

}