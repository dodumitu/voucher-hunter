import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductRepository } from '../repositories/product.repository';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository, // private readonly categoryRepository: CategoryRepository,
  ) {}

  async getAllProduct(page: number, limit: number, start: string) {
    const count = await this.productRepository.countDocuments({});
    const count_page = (count / limit).toFixed();
    const products = await this.productRepository.getByCondition(
      {
        _id: {
          $gt: isValidObjectId(start) ? start : '000000000000000000000000',
        },
      },
      null,
      {
        sort: {
          _id: 1,
        },
        skip: (page - 1) * limit,
        limit: Number(limit),
      },
    );
    return { count_page, products };
  }

  async getProductById(product_id: string) {
    const product = await this.productRepository.findById(product_id);

    if (product) {
      await product
        .populate([
          {
            path: 'categories',
            match: {
              _id: '62fd1a9473adb27682f0f440',
            },
            select: 'title',
            options: { limit: 100, sort: { name: 1 } },
          },
        ])
        .execPopulate();

      return product;
    } else {
      throw new NotFoundException(product_id);
      // throw new productsNotFoundException(product_id);
    }
    // throw new HttpException('products not found', HttpStatus.NOT_FOUND);
  }

  async replaceProduct(product_id: string, data: UpdateProductDto) {
    return await this.productRepository.findByIdAndUpdate(product_id, data);
  }

  async createProduct(product: CreateProductDto) {
    const new_product = await this.productRepository.create(product);
    // if (product.categories) {
    //   await this.productRepository.updateMany(
    //     {
    //       _id: { $in: product.categories },
    //     },
    //     {
    //       $push: {
    //         product: new_product._id,
    //       },
    //     },
    //   );
    // }
    return new_product;
  }

  async getByCategory(category_id: string) {
    return await this.productRepository.getByCondition({
      categories: {
        $elemMatch: { $eq: category_id },
      },
    });
  }

  async getByCategories(category_ids: [string]) {
    return await this.productRepository.getByCondition({
      categories: {
        $all: category_ids,
      },
    });
  }

  async deleteProduct(product_id: string) {
    return await this.productRepository.deleteOne(product_id);
  }

  async getByArray() {
    return await this.productRepository.getByCondition({
      tags: { $exists: false },
    });
  }
}
