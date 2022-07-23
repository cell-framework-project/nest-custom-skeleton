
export  class DomainValidation{
  
  protected errors: Error[];
  
  constructor(errors:Error[]=[]){
    this.errors = errors;
  }

  public  isValid():boolean{

    if(this.errors.length > 0){
      return false;
    }
    else{
      return true;
    }
  }

  public addError(error:Error):void{
    this.errors.push(error);
  }

  public getErrors():Error[]{
    return this.errors;
  }

}