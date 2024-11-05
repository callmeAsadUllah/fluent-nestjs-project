import 'reflect-metadata';

import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import serverless from 'serverless-http';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useLogger(['log', 'error', 'warn', 'debug']);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Students API')
    .setDescription('API to manage students')
    .setVersion('1.0')
    .addTag('students')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(port);
}

const handler = serverless(bootstrap);
export { handler };
