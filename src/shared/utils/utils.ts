//random code generator
export function randomCodeGenerator(length:number):string{

  let code:string = '';

  for (let index = 0; index < length; index++) {
    code += Math.round(Math.random()*10).toString(); 
  }

  return code;
}