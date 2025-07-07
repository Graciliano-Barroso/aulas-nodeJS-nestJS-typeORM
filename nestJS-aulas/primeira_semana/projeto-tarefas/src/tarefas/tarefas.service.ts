import { Injectable } from '@nestjs/common';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './tarefa-status.enum';
import { CreateTarefaDto } from './dto/create-tarefa.dto';

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [];

  getTodasTarefas(): Tarefa[] {
    return this.tarefas;
  }

  getTarefaPorId(id: number): Tarefa {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (!tarefa) {
      throw new Error(`Tarefa com id ${id} não encontrada.`);
    }
    return tarefa;
  }

  getTarefasPorStatus(status: string): Tarefa[] {
    return this.tarefas.filter((t) => t.status === status.toUpperCase());
  }

   createTarefa(dto: CreateTarefaDto): Tarefa {
    const { titulo, descricao } = dto;

    const tarefa: Tarefa = {
      id: Date.now(), // simulando ID único
      titulo,
      descricao,
      status: TarefaStatus.ABERTA,
    };

    this.tarefas.push(tarefa);
    return tarefa;
  }
}
