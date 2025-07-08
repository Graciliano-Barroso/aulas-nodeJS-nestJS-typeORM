import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv'

// Carrega as variáveis do .env antes de tudo
dotenv.config();

async function bootstrap() {
  console.log('Ambiente atual:', process.env.NODE_ENV || 'desenvolvimento');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const port = process.env.PORT || 3000;
  await app.listen(3000);

  console.log(`Servidor rodando na porta ${port}`);
}
bootstrap();
