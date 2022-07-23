import { IsNotEmpty, IsEmail } from "class-validator";

export class UserEmailAuthenticateDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  
}