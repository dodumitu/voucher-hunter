import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductQuery } from '../queries/getproduct.query';
import { ProductRepository } from '../repositories/product.repository';

@QueryHandler(GetProductQuery)
export class GetProductHandler implements ICommandHandler<GetProductQuery> {
  constructor(private productRepository: ProductRepository) {}

  async execute(command: GetProductQuery) {
    return await this.productRepository.findById(command.product_id);
  }
}
