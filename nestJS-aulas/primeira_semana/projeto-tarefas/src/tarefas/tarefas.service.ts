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
    private readonly tarefasRepository: Repository<TarefaEntity>,
  ) {}

  async findAll(): Promise<TarefaEntity[]> {
    return this.tarefasRepository.find();
  }

  async findById(id: string): Promise<TarefaEntity> {
    const tarefa = await this.tarefasRepository.findOne({ where: { id } });
    if (!tarefa) {
      throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
    }
    return tarefa;
  }

  async create(dto: CreateTarefaDto): Promise<TarefaEntity> {
    const nova = this.tarefasRepository.create({
      ...dto,
      status: TarefaStatus.ABERTA,
    });
    return this.tarefasRepository.save(nova);
  }

  async delete(id: string): Promise<void> {
    const result = await this.tarefasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
    }
  }

  async updateStatus(id: string, status: TarefaStatus): Promise<TarefaEntity> {
    const tarefa = await this.findById(id);
    tarefa.status = status;
    return this.tarefasRepository.save(tarefa);
  }
}
