import {
   Injectable,
   NotFoundException,
   UnauthorizedException,
} from "@nestjs/common";
import { TarefaStatus } from "./enums/tarefa-status.enum";
import { CreateTarefaDto } from "./dto/create-tarefa.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tarefas } from "./tarefa.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { FilterTarefasDto } from "./dto/filter-tarefas.dto";

@Injectable()
export class TarefasService {
   constructor(
      @InjectRepository(Tarefas)
      private readonly tarefasRepository: Repository<Tarefas>,
   ) {}

   async listarComFiltro(
      usuario: UsuarioEntity,
      filtroDto: FilterTarefasDto,
   ): Promise<Tarefas[]> {
      const { status, busca } = filtroDto;

      const query = this.tarefasRepository.createQueryBuilder("tarefa");
      query.where("tarefa.usuarioId = :usuarioId", { usuarioId: usuario.id });

      if (status) {
         query.andWhere("tarefa.status = :status", { status });
      }

      if (busca) {
         query.andWhere(
            "(LOWER(tarefa.titulo) LIKE LOWER(:busca) OR LOWER(tarefa.descricao) LIKE LOWER(:busca))",
            { busca: `%${busca}%` },
         );
      }

      return query.getMany();
   }

   async findById(id: string, usuario: UsuarioEntity): Promise<Tarefas> {
      const tarefa = await this.tarefasRepository.findOne({
         where: { id },
         relations: ["usuario"],
      });

      if (!tarefa) {
         throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
      }

      if (tarefa.usuario.id !== usuario.id) {
         throw new UnauthorizedException(
            "Você não tem permissão para acessar, editar ou deletar a tarefa de outro usuário",
         );
      }

      return tarefa;
   }

   async create(
      dto: CreateTarefaDto,
      usuario: UsuarioEntity,
   ): Promise<Tarefas> {
      console.log("Criando tarefa para usuário:", usuario);
      const novaTarefa = this.tarefasRepository.create({
         ...dto,
         status: TarefaStatus.ABERTA,
         usuario: usuario, // atribuindo o usuário dono da tarefa
      });
      return this.tarefasRepository.save(novaTarefa);
   }

   async updateStatus(
      id: string,
      status: TarefaStatus,
      usuario: UsuarioEntity,
   ): Promise<Tarefas> {
      const tarefa = await this.findById(id, usuario); // valida propriedade
      tarefa.status = status;
      return this.tarefasRepository.save(tarefa);
   }

   async delete(id: string, usuario: UsuarioEntity): Promise<void> {
      const tarefa = await this.findById(id, usuario); // garante que pertence ao usuário

      const result = await this.tarefasRepository.delete(id);
      if (result.affected === 0) {
         throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
      }
   }
}
