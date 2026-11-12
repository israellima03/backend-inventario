import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";


export class loginAuthDto{
   //hacer la validaciones de login  
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @MinLength(6)
    @MaxLength(15)
    @IsNotEmpty()
    @Matches(/^[A-Za-z0-9]+$/)
    password: string;
}