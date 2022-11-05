import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands/createProduct.command';
import { ProductRepository } from '../repositories/product.repository';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand) {
    return await this.productRepository.create(command.createProductDto);
  }
}
