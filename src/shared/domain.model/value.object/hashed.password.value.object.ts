import * as bcrypt from 'bcrypt';
import { PasswordValueObject } from './password.value.object';
import { passwordHash, passwordCompare } from 'src/shared/utils/utils';

export class HashedPasswordValueObject{

  readonly value: string;

  constructor(value:string){
    this.value = value;
  }

  assert(password:PasswordValueObject):boolean{
    return passwordCompare(password.value,this.value);
  }

  static create(value:string):HashedPasswordValueObject{
    return new HashedPasswordValueObject(passwordHash(value));
  }

}