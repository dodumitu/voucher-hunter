import { IsNotEmpty } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  title: string;
  date: string;
  content: string;
}

export class UpdateNewsDto {
  @IsNotEmpty()
  title: string;
  date: string;
  content: string;
}
