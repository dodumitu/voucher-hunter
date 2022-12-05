import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class updateEmailDto {
  @IsString()
  @IsEmail()
  email: string;
}
