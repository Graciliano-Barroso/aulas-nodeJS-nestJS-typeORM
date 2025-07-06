import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Ambiente atual:', process.env.NODE_ENV || 'desenvolvimento');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
