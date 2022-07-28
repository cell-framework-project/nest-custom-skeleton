import { Injectable } from '@nestjs/common';
import { randomCodeGenerator } from '../../shared/utils/utils';
import { uuid4 } from '../../shared/utils/utils';
import { fixedLengthIntegerString } from '../../shared/utils/utils';
import { passwordHash } from '../../shared/utils/utils';

@Injectable()
export class UtilsService {

  fixedLengthIntegerString(int:number, length:number):string {
    return fixedLengthIntegerString(int, length);
  }

  uuidGenerator():string{
    const uuid:string = uuid4();
    return uuid;
  }

  randomCodeGenerator(length:number):string{
    return randomCodeGenerator(length);
  }

  passwordHash(password:string):string{
    return passwordHash(password);
  }

}
