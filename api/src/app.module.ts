import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';
import * as Joi from '@hapi/joi';
// import { HomeModule } from './home/home.module';
// import { HomeService } from './home/home.service';
@Module({
  imports: [
    ProductModule,
    UserModule,
    NewsModule,
    // HomeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        UPLOADED_FILES_DESTINATION: Joi.string().required(),
        // ...
      }),
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
