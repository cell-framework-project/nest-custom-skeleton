import { randomCodeGenerator } from "src/shared/utils/utils";

export class RandomCodeValueObject{

  readonly code:string;

  constructor(code:string){
    this.code = code;
  }

  public static random(length:number) {
    return new RandomCodeValueObject(randomCodeGenerator(length));
  }

}