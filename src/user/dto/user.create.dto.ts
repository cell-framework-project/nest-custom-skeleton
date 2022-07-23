import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UserCreateDto {

  @MinLength(8)
  @MaxLength(32)
  @IsNotEmpty()
  @IsAlphanumeric()
  nickname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @IsAlpha()
  @IsNotEmpty()
  firstName: string;

  @IsAlpha()
  @IsNotEmpty()
  lastName: string;
  
}