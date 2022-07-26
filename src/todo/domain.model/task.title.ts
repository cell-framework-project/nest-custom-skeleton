import { StringValueObject } from 'src/shared/domain.model/value.object/stringvalueobject';
import { Column } from 'typeorm';


export class TaskTitle extends StringValueObject{

  @Column('varchar',{ length:256,name:'title',unique:true })
  readonly value: string;

}