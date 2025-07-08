import { Injectable, NotFoundException } from '@nestjs/common';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { FilterTarefasDto } from './dto/filter-tarefas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TarefaEntity } from './tarefa.entity';

@Injectable()
export class TarefasService {

  constructor(
    @InjectRepository(TarefaEntity)
    private tarefasRepository: Repository<TarefaEntity>,
  ) {}

  private tarefas: Tarefa[] = [];

  getTodasTarefas(): Tarefa[] {
    return this.tarefas;
  }

  getTarefaPorId(id: number): Tarefa {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (!tarefa) {
      throw new NotFoundException(`Tarefa com id ${id} não encontrada.`);
    }
    return tarefa;
  }

  async createTarefa(dto: CreateTarefaDto): Promise<TarefaEntity> {
    const tarefa = this.tarefasRepository.create({
      titulo: dto.titulo,
      descricao: dto.descricao,
      status: TarefaStatus.ABERTA,
    });

    return this.tarefasRepository.save(tarefa);
  }

  atualizarStatus(id: number, novoStatus: TarefaStatus): Tarefa {
    const tarefa = this.getTarefaPorId(id);
    tarefa.status = novoStatus;
    return tarefa;
  }

  deleteTarefa(id: number): void {
    const tarefa = this.getTarefaPorId(id); // lança NotFoundException se não existir
    this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
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
