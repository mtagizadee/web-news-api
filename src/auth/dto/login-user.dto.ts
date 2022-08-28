import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginUserDto {
  @IsEmail({},{message: 'email is not valid'})
  @IsNotEmpty({message: 'email is missing'})
  email: string;

  @IsString({message: 'password must be a string'})
  @IsNotEmpty({message: 'password is missing'})
  @Length(4,16,{message: 'length of the password must be between 4 and 16 characters'})
  password: string;
}