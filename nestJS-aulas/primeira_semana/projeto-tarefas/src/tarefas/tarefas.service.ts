import { Injectable, NotFoundException } from '@nestjs/common';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefas } from './tarefa.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefas)
    private readonly tarefasRepository: Repository<Tarefas>,
  ) {}

  async findById(id: string): Promise<Tarefas> {
    const tarefa = await this.tarefasRepository.findOne({ where: { id } });
    if (!tarefa) {
      throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
    }
    return tarefa;
  }

  // Buscar todas as tarefas de um usuário
  async findByUsuario(usuario: UsuarioEntity): Promise<Tarefas[]> {
    return this.tarefasRepository.find({
      where: { usuario: { id: usuario.id } },
    });
  }

  async create(dto: CreateTarefaDto, usuario: UsuarioEntity): Promise<Tarefas> {
    console.log('Criando tarefa para usuário:', usuario);
    const novaTarefa = this.tarefasRepository.create({
      ...dto,
      status: TarefaStatus.ABERTA,
      usuario: usuario, // atribuindo o usuário dono da tarefa
    });
    return this.tarefasRepository.save(novaTarefa);
  }

  async delete(id: string): Promise<void> {
    const result = await this.tarefasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
    }
  }

  async updateStatus(id: string, status: TarefaStatus): Promise<Tarefas> {
    const tarefa = await this.findById(id);
    tarefa.status = status;
    return this.tarefasRepository.save(tarefa);
  }
}
