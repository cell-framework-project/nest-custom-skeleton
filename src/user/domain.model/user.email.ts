import { EmailValueObject } from "src/shared/domain.model/value.object/email.value.object";
import { Column } from "typeorm"

export class UserEmail extends EmailValueObject{

    @Column('varchar',{length:256,name:'email',unique:true})
    value: string;

    static create(value:string):UserEmail{
        return new UserEmail(value);
    }

}