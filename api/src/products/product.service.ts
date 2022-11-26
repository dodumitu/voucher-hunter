import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.entity';
import { CreateProductDto } from './product.dto';
import { FilterProductDTO } from './product.filter.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
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
      '5 sản phẩm admin: ': slideProduct,
      '5 sản phẩm nổi bật: ': featureProduct,
      'tất cả sản phẩm': products,
    };
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async getProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    return product;
  }

  async addProduct(createProductDTO: CreateProductDto): Promise<Product> {
    const newProduct = await this.productModel.create(createProductDTO);
    return newProduct.save();
  }

  async updateProduct(
    id: string,
    createProductDTO: CreateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      createProductDTO,
      { new: true },
    );
    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<any> {
    const deletedProduct = await this.productModel.findByIdAndRemove(id);
    return deletedProduct;
  }

  async getFilteredProducts(
    filterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    const { category, search } = filterProductDTO;
    let products = await this.getAllProducts();

    if (search) {
      products = products.filter(
        (product) =>
          product.title?.includes(search) ||
          product.description?.includes(search),
      );
    }

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    return products;
  }
}
