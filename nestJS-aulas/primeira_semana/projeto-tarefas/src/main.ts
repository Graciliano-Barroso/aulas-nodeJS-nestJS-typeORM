import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as dotenv from "dotenv";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

// Carrega as variáveis do .env antes de tudo
dotenv.config();

async function bootstrap() {
   console.log("Ambiente atual:", process.env.NODE_ENV || "desenvolvimento");

   const app = await NestFactory.create(AppModule);

   app.enableCors(); // Permite que o frontend se comunique com a API

   // Ativa validação global (para DTOs com class-validator)
   app.useGlobalPipes(new ValidationPipe());

   // Configuração Swagger
   const config = new DocumentBuilder()
      .setTitle("API de Tarefas")
      .setDescription("Documentação da API com NestJS + Swagger")
      .setVersion("1.0")
      .addBearerAuth() // Habilita autenticação JWT no Swagger
      .build();

   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup("api", app, document); // Rota: http://localhost:3001/api

   const port = process.env.PORT || 3001;
   await app.listen(3001);

   console.log(`Servidor rodando na porta ${port}`);
}
bootstrap();
