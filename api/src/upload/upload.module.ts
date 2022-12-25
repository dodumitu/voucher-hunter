import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AwsS3Module } from 'src/aws-s3/s3.module';
import { S3Service } from 'src/aws-s3/s3.service';
import { AuthController } from 'src/user/controllers/auth.controller';
import { JwtStrategy } from 'src/user/jwt.strategy';
import { UserSchema } from 'src/user/models/user.model';
import { AuthService } from 'src/user/services/auth.service';
import { UserService } from 'src/user/services/user.service';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [
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
  controllers: [AuthController, UploadController],
  providers: [S3Service, UploadService, UserService, AuthService, JwtStrategy],
})
export class UploadModule {}
