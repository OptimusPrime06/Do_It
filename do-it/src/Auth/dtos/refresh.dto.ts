import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class RefreshDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    refreshToken: string;
}