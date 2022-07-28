import { Injectable } from '@nestjs/common';
import { randomCodeGenerator } from 'src/shared/utils/utils';
import { uuid4 } from 'src/shared/utils/utils';
import { fixedLengthIntegerString } from 'src/shared/utils/utils';
import { passwordHash } from 'src/shared/utils/utils';

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
