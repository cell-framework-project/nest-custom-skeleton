import { v4 } from "uuid";
import * as bcrypt from 'bcrypt';

export function randomCodeGenerator(length:number):string{

  let code:string = '';

  for (let index = 0; index < length; index++) {
    code += Math.round(Math.random()*10).toString(); 
  }

  return code;
  
}

export function uuid4(){
  return v4();
}

export function fixedLengthIntegerString(int:number,length:number):string{

  const stringInt = int.toString();
  const count = length - stringInt.length;

  return '0'.repeat(count) + stringInt;

}

export function passwordHash(password:string):string{
  return bcrypt.hashSync(password,10);
}