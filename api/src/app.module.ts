import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { NewsModule } from './news/news.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
@Module({
  imports: [
    ProductModule,
    UserModule,
    AuthModule,
    NewsModule,
    HomeModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
