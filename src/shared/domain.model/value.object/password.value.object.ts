import * as bcrypt from 'bcrypt';
import { HashedPasswordValueObject } from "./hashed.password.value.object";

export class PasswordValueObject{

  readonly value: string;

  constructor(value:string){
    this.value = value;
  }

  static create(value:string):PasswordValueObject{
    return new PasswordValueObject(value);
  }

  hash():HashedPasswordValueObject{
    return new HashedPasswordValueObject(bcrypt.hashSync(this.value,10));
  }

}