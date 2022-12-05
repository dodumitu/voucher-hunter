import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserInfoDto {
  @IsString()
  address: string;

  @IsString()
  gender: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(10)
  @MaxLength(11)
  phone: string;

  @MinLength(8)
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'mật khẩu yếu',
  })
  password: string;
}
