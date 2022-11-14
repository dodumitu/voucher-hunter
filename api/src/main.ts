// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, { cors: true });

//   app.useGlobalPipes(new ValidationPipe());
//   // const { httpAdapter } = app.get(HttpAdapterHost);
//   // app.useGlobalFilters(new ExceptionLoggerFilter(httpAdapter));

//   await app.listen(5400);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5400);
}

bootstrap();
