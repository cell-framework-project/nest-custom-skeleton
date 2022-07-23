import { HashedPasswordValueObject } from "src/shared/domain.model/value.object/hashed.password.value.object";
import { Column } from "typeorm"

export class UserHashedPassword extends HashedPasswordValueObject{

  @Column('varchar', { length:256, name:'hashed_password' })
  value: string;

}