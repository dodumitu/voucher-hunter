import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './controllers/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AwsS3Module } from 'src/aws-s3/s3.module';
import { ProductModule } from 'src/products/product.module';

@Module({
  imports: [
    forwardRef(() => ProductModule),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
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
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, JwtStrategy],
})
export class UserModule {}
