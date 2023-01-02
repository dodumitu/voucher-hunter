import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.entity';
import { AuthController } from 'src/user/controllers/auth.controller';
import { AuthService } from 'src/user/services/auth.service';
import { JwtStrategy } from 'src/user/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/services/user.service';
import { User, UserSchema } from 'src/user/models/user.model';
import { AwsS3Module } from 'src/aws-s3/s3.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRETKEY'),
        signOptions: {
          expiresIn: configService.get('EXPIRESIN'),
        },
      }),
      inject: [ConfigService],
    }),
    AwsS3Module,
  ],
  controllers: [ProductController, AuthController],
  providers: [ProductService, UserService, AuthService, JwtStrategy],
  exports: [ProductService],
})
export class ProductModule {}
