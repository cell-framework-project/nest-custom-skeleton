
export class PersonalNameValueObject{

    first: string;
    last: string;

    constructor(first:string,last:string){
        this.first=first;
        this.last=last;
    }

    getFirst():string{
        return this.first;
    }

    getLast():string{
        return this.last;
    }

}