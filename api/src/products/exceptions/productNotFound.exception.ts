import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotFoundException extends HttpException {
  constructor(ProductId: string) {
    super(`Product with id ${ProductId} not found`, HttpStatus.NOT_FOUND);
  }
}
