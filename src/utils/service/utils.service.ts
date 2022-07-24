import { Injectable } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';


@Injectable()
export class UtilsService {

  fixedLength(integer:number): number {
    return integer;
  }

  uuidGenerator():string{
    const uuid:string = uuid4();
    return uuid;
  }

}
