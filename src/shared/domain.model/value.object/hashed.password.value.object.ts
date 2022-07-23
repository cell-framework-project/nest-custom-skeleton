import * as bcrypt from 'bcrypt';
import { PasswordValueObject } from './password.value.object';

export class HashedPasswordValueObject{

  readonly value: string;

  constructor(value:string){
    this.value = value;
  }

  assert(password:PasswordValueObject):boolean{
    return bcrypt.compareSync(password.value,this.value);
  }

  static create(value:string):HashedPasswordValueObject{
    return new HashedPasswordValueObject(bcrypt.hashSync(value,10));
  }

}