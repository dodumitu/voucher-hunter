import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsPhoneNumber,
} from 'class-validator';

export class UpdatePhoneDto {
  @MinLength(10)
  @MaxLength(11)
  phone: string;
}
