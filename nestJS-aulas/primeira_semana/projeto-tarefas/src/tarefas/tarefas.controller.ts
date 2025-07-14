import {
   ApiTags,
   ApiBearerAuth,
   ApiBody,
   ApiParam,
   ApiQuery,
   ApiResponse,
} from "@nestjs/swagger";
import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
   Query,
   UseGuards,
} from "@nestjs/common";
import { TarefasService } from "./tarefas.service";
import { CreateTarefaDto } from "./dto/create-tarefa.dto";
import { TarefaStatus } from "./enums/tarefa-status.enum";
import { TarefaStatusValidationPipe } from "./pipes/tarefa-status-validation.pipe";
import { Tarefas } from "./tarefa.entity";
import { JwtAuthGuard } from "src/auth/jwt.auth.guard";
import { UsuarioLogado } from "src/usuario/decorators/usuario.decorator";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { FilterTarefasDto } from "./dto/filter-tarefas.dto";

@ApiTags("Tarefas")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("tarefas") // prefixo: todas as rotas começam com /tarefas
export class TarefasController {
   constructor(private readonly tarefasService: TarefasService) {}

   // GET /tarefas
   @Get()
   @ApiQuery({ name: "status", required: false, enum: TarefaStatus })
   @ApiQuery({
      name: "busca",
      required: false,
      description: "Busca por título ou descrição",
   })
   @ApiResponse({
      status: 200,
      description: "Lista de tarefas do usuário logado",
   })
   async listar(
      @UsuarioLogado() usuario: UsuarioEntity,
      @Query() filtroDto: FilterTarefasDto,
   ) {
      return this.tarefasService.listarComFiltro(usuario, filtroDto);
   }

   // GET /tarefas/:id
   @Get(":id")
   @ApiParam({ name: "id", description: "ID da tarefa" })
   @ApiResponse({ status: 200, description: "Retorna a tarefa encontrada" })
   @ApiResponse({
      status: 403,
      description: "Tarefa não pertence ao usuário logado",
   })
   @ApiResponse({ status: 404, description: "Tarefa não encontrada" })
   findById(
      @Param("id") id: string,
      @UsuarioLogado() usuario: UsuarioEntity,
   ): Promise<Tarefas> {
      return this.tarefasService.findById(id, usuario);
   }

   // POST /tarefas
   @Post()
   @ApiBody({ description: "Criação de nova tarefa" })
   @ApiResponse({ status: 201, description: "Tarefa criada com sucesso" })
   @ApiResponse({ status: 401, description: "Não autorizado" })
   async create(
      @Body() dto: CreateTarefaDto,
      @UsuarioLogado() usuario: UsuarioEntity,
   ) {
      return this.tarefasService.create(dto, usuario);
   }

   @Patch(":id/status")
   @ApiParam({ name: "id", description: "ID da tarefa" })
   @ApiBody({
      schema: {
         properties: {
            status: { type: "string", enum: Object.values(TarefaStatus) },
         },
      },
   })
   @ApiResponse({ status: 200, description: "Status da tarefa atualizado" })
   @ApiResponse({
      status: 403,
      description: "Tarefa não pertence ao usuário logado",
   })
   @ApiResponse({ status: 404, description: "Tarefa não encontrada" })
   updateStatus(
      @Param("id") id: string,
      @Body("status", TarefaStatusValidationPipe) status: TarefaStatus,
      @UsuarioLogado() usuario: UsuarioEntity,
   ): Promise<Tarefas> {
      console.log('Atualizando status:', { id, status, usuario });
      return this.tarefasService.updateStatus(id, status, usuario);
   }

   // DELETE /id
   @Delete(":id")
   @ApiParam({ name: "id", description: "ID da tarefa" })
   @ApiResponse({ status: 200, description: "Tarefa removida com sucesso" })
   @ApiResponse({
      status: 403,
      description: "Tarefa não pertence ao usuário logado",
   })
   @ApiResponse({ status: 404, description: "Tarefa não encontrada" })
   delete(
      @Param("id") id: string,
      @UsuarioLogado() usuario: UsuarioEntity,
   ): Promise<void> {
      return this.tarefasService.delete(id, usuario);
   }
}
