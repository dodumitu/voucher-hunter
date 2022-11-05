// import { User } from '../../user/models/user.model';
import { CreateProductDto } from '../dto/product.dto';

export class CreateProductCommand {
  constructor(public readonly createProductDto: CreateProductDto) {}
}
