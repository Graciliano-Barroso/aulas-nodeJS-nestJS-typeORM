import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { TarefaEntity } from './tarefa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TarefaEntity])],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
