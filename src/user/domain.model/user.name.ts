import { PersonalNameValueObject } from "src/shared/domain.model/value.object/personal.name.value.object";
import { Column } from "typeorm"

export class UserName extends PersonalNameValueObject{

    @Column('varchar',{length:256,name:'first_name'})
    first: string;

    @Column('varchar',{length:256,name:'last_name'})
    last: string;

    static create(first:string,last:string):UserName{
        return new UserName(first,last);
    }

}