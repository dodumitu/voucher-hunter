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

    const search = query.keyword
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
      .find({ ...search })
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

    const search = query.keyword
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
    const product = await this.productModel
      .find({ ...search })
      .limit(resPerPage)
      .skip(skip);

    return product.filter((product) => product.authorId === authorId);
  }

  async findAllByAdmin(query): Promise<Product[]> {
    const resPerPage = 12;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const search = query.keyword
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
    const product = await this.productModel
      .find({ ...search })
      .limit(resPerPage)
      .skip(skip);

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

  // async getSellerFilteredProducts(user: User, query): Promise<Product[]> {
  //   // const { category, search, brand, price } = filterProductDTO;
  //   let seller = await this.findAllByAuthorId(user.id, query);

  //   if (search) {
  //     seller = seller.filter(
  //       (product) =>
  //         product.title?.includes(search) ||
  //         product.description?.includes(search) ||
  //         product.brand?.includes(search) ||
  //         product.category?.includes(search),
  //     );
  //   }
  //   if (category) {
  //     seller = seller.filter((product) => product.category === category);
  //   }
  //   if (brand) {
  //     seller = seller.filter((product) => product.brand === brand);
  //   }
  //   if (price) {
  //     seller = seller.filter((product) => product.price <= price);
  //   }

  //   return seller;
  // }
}
