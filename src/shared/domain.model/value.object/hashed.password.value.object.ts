import * as bcrypt from 'bcrypt';
import { PasswordValueObject } from './password.value.object';

export class HashedPasswordValueObject{

  value: string;

  constructor(value:string){
    this.value = value;
  }

  getValue():string{
    return this.value;
  }

  assert(password:PasswordValueObject):boolean{
    return bcrypt.compareSync(password.getValue(),this.value);
  }

  static create(value:string):HashedPasswordValueObject{
    return new HashedPasswordValueObject(bcrypt.hashSync(value,10));
  }

}