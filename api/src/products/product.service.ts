import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.entity';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { FilterProductDTO } from './product.filter.dto';
import { softDeletePlugin, SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { User } from 'src/user/models/user.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: SoftDeleteModel<ProductDocument>,
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

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();

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

  async findAllByAuthorId(authorId): Promise<Product[]> {
    const product = await this.getAllProducts();
    return product.filter((product) => product.authorId === authorId);
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

    const deletedProduct = await this.productModel.softDelete(filter);
    return deletedProduct;
  }

  async getFilteredProducts(
    filterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    const { category, search, brand, price } = filterProductDTO;
    let products = await this.getAllProducts();

    if (search) {
      products = products.filter(
        (product) =>
          product.title?.includes(search) ||
          product.description?.includes(search) ||
          product.brand?.includes(search) ||
          product.category?.includes(search),
      );
    }
    if (category) {
      products = products.filter((product) => product.category === category);
    }
    if (brand) {
      products = products.filter((product) => product.brand === brand);
    }
    if (price) {
      products = products.filter((product) => product.price <= price);
    }

    return products;
  }

  async getSellerFilteredProducts(
    user: User,
    filterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    const { category, search, brand, price } = filterProductDTO;
    let products = await this.findAllByAuthorId(user.id);

    if (search) {
      products = products.filter(
        (product) =>
          product.title?.includes(search) ||
          product.description?.includes(search) ||
          product.brand?.includes(search) ||
          product.category?.includes(search),
      );
    }
    if (category) {
      products = products.filter((product) => product.category === category);
    }
    if (brand) {
      products = products.filter((product) => product.brand === brand);
    }
    if (price) {
      products = products.filter((product) => product.price <= price);
    }

    return products;
  }
}
