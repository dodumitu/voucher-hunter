import {
  IsNumber,
  IsMongoId,
  Min,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationParams {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;

  @IsNotEmpty()
  start: string;
}
