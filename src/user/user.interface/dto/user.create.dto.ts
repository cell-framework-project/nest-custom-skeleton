import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UserCreateDto {

  @MinLength(6)
  @MaxLength(32)
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  password: string;

  @IsAlpha()
  @IsNotEmpty()
  firstName: string;

  @IsAlpha()
  @IsNotEmpty()
  lastName: string;
  
}