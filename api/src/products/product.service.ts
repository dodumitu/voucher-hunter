import { Injectable, NotFoundException } from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.entity';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { FilterProductDTO } from './product.filter.dto';
import { softDeletePlugin, SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { User } from 'src/user/models/user.model';
import { int } from 'aws-sdk/clients/datapipeline';
import { Query } from 'express-serve-static-core';
import * as mongoose from 'mongoose';
import { query } from 'express';
import { ObjectID } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
  ) {}

  async getHomeProduct() {
    const products = await this.productModel.find().exec();
    const slideProduct = [];
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * products.length);
      slideProduct.push(products[idx]);
      products.splice(idx, 1);
    }
    const featureProduct = [];
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * products.length);
      featureProduct.push(products[idx]);
      products.splice(idx, 1);
    }
    return {
      success: true,
      'slide 5 sản phẩm admin: ': slideProduct,
      'slide 5 sản phẩm nổi bật: ': featureProduct,
    };
  }

  async getAllProducts(query: Query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          brand: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          description: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          category: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        }
      : {};

    const products = this.productModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async getAllProductsPriceDown(query: Query): Promise<any> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          brand: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          description: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          category: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        }
      : {};

    const products = this.productModel
      .find({ ...keyword })
      .sort({ price: -1 })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }
  async getAllProductsPriceUp(query: Query): Promise<any> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          brand: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          description: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          category: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        }
      : {};

    const products = this.productModel
      .find({ ...keyword })
      .sort({ price: 1 })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async getAllProductsNewer(query: Query): Promise<any> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          brand: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          description: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          category: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        }
      : {};

    const products = this.productModel
      .find({ ...keyword })
      .sort({ expireDate: -1 })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async getAllProductsOlder(query: Query): Promise<any> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          brand: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          description: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        } || {
          category: {
            $regex: query.keyword.toString(),
            $options: 'i',
          },
        }
      : {};

    const products = this.productModel
      .find({ ...keyword })
      .sort({ expireDate: 1 })
      .limit(resPerPage)
      .skip(skip);
    return products;
  }

  async getProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    return product;
  }

  async addProduct(
    user: User,
    createProductDTO: CreateProductDto,
  ): Promise<Product> {
    const newProduct = await this.productModel.create(createProductDTO);
    createProductDTO.authorId = user.id;
    return newProduct.save();
  }

  async findAllByAuthorId(authorId, query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          $or: [
            {
              title: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              brand: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              description: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              category: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
          ],
        }
      : {};
    const product = await this.productModel
      .find({ ...keyword, authorId: authorId })
      .limit(resPerPage)
      .skip(skip);

    return product;
  }

  async findAllByAuthorPriceDown(authorId, query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          $or: [
            {
              title: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              brand: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              description: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              category: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
          ],
        }
      : {};
    const product = await this.productModel
      .find({ ...keyword, authorId: authorId })
      .sort({ price: -1 })
      .skip(skip)
      .limit(resPerPage);

    return product;
  }

  async findAllByAuthorPriceUp(authorId, query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          $or: [
            {
              title: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              brand: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              description: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              category: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
          ],
        }
      : {};
    const product = await this.productModel
      .find({ ...keyword, authorId: authorId })
      .sort({ price: 1 })
      .skip(skip)
      .limit(resPerPage);

    return product;
  }

  async findAllByAuthorNewer(authorId, query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          $or: [
            {
              title: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              brand: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              description: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              category: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
          ],
        }
      : {};
    const product = await this.productModel
      .find({ ...keyword, authorId: authorId })
      .sort({ expireDate: -1 })
      .skip(skip)
      .limit(resPerPage);

    return product;
  }

  async findAllByAuthorOlder(authorId, query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
          $or: [
            {
              title: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              brand: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              description: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
            {
              category: {
                $regex: query.keyword.toString(),
                $options: 'i',
              },
            },
          ],
        }
      : {};
    const product = await this.productModel
      .find({ ...keyword, authorId: authorId })
      .sort({ expireDate: 1 })
      .skip(skip)
      .limit(resPerPage);

    return product;
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const filter = { _id: id };

    const deletedProduct = await this.productModel.deleteOne(filter);
    return deletedProduct;
  }
}
