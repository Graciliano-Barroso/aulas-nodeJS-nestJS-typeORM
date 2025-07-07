import { Injectable } from '@nestjs/common';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { FilterTarefasDto } from './dto/filter-tarefas.dto';

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

  atualizarStatus(id: number, novoStatus: TarefaStatus): Tarefa {
    const tarefa = this.getTarefaPorId(id);
    tarefa.status = novoStatus;
    return tarefa;
  }

  filtrarTarefas(filtroDto: FilterTarefasDto): Tarefa[] {
    const { status, termo } = filtroDto;
    let tarefasFiltradas = this.tarefas;

    if (status) {
      tarefasFiltradas = tarefasFiltradas.filter((t) => t.status === status);
    }

    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (t) =>
          t.titulo.toLowerCase().includes(termo.toLowerCase()) ||
          t.descricao.toLowerCase().includes(termo.toLowerCase()),
      );
    }

    return tarefasFiltradas;
  }
}
