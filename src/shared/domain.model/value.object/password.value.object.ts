export class PasswordValueObject{

  readonly value: string;

  constructor(value:string){
    this.value = value;
  }

  static create(value:string):PasswordValueObject{
    return new PasswordValueObject(value);
  }

}