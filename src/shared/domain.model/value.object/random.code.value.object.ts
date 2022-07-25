import { randomCodeGenerator } from "src/shared/utils/utils";
import { PasswordValueObject } from "./password.value.object";

export class RandomCodeValueObject extends PasswordValueObject{

  protected static digits:number=5;

  static random():PasswordValueObject{
    return new PasswordValueObject( randomCodeGenerator(this.digits) );
  }

}