import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasService } from './tarefas/tarefas.service';
import { TarefasController } from './tarefas/tarefas.controller';

@Module({
  controllers: [AppController, TarefasController],
  providers: [AppService, TarefasService],
})
export class AppModule {}
