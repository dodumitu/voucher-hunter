import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(
    id: string,
    Brand: string,
    description: string,
    expireDate: Date,
    title: string,
    discountCode: string,
    quantity: number,
    discountDetail: string,
  ) {
    const newProduct = new this.productModel({
      Brand: Brand,
      description: description,
      expireDate: expireDate,
      title: title,
      discountCode: discountCode,
      quantity: quantity,
      discountDetail: discountDetail,
    });

    const result = await newProduct.save();

    return result.id as string;
  }

  async getAllProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      brand: prod.brand,
      description: prod.description,
      expireDate: prod.expireDate,
      title: prod.title,
      discountCode: prod.discountCode,
      quantity: prod.qty,
      discountDetail: prod.discountDetails,
    }));
  }

  async getProduct(id: string) {
    const product = await this.findProduct(id);

    return {
      id: product.id,
      brand: product.brand,
      description: product.description,
      expireDate: product.expireDate,
      title: product.title,
      discountCode: product.discountCode,
      quantity: product.qty,
      discountDetail: product.discountDetails,
    };
  }

  async updateProduct(
    id: string,
    brand: string,
    description: string,
    expireDate: Date,
    title: string,
    discountCode: string,
    quantity: number,
    discountDetail: string,
  ) {
    const product = await this.findProduct(id);

    if (brand) {
      product.brand = brand;
    }
    if (description) {
      product.description = description;
    }
    if (expireDate) {
      product.expireDate = expireDate;
    }
    if (title) {
      product.title = title;
    }
    if (discountCode) {
      product.discountCode = discountCode;
    }
    if (quantity) {
      product.qty = quantity;
    }
    if (discountDetail) {
      product.discountDetails = discountDetail;
    }

    product.save();
  }

  async removeProduct(id: string) {
    const result = await this.productModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0)
      throw new NotFoundException('Could not find product');
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (err) {
      throw new NotFoundException('Could not find product');
    }

    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return product;
  }
}
