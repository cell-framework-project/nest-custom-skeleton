import { StringValueObject } from "src/shared/domain.model/value.object/stringvalueobject";
import { Column } from "typeorm"

export class UserNickname extends StringValueObject{

    @Column('varchar',{ length:256,name:'nickname',unique:true })
    value: string;

    static create(value:string):UserNickname{
        return new UserNickname(value);
    }

}