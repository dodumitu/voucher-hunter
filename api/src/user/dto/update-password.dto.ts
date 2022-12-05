import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class updatePasswordDto {
  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'mật khẩu yếu',
  })
  password: string;

  // @IsString()
  // @MinLength(8)
  // @Matches('password')
  // passwordConfirm: string;
}
