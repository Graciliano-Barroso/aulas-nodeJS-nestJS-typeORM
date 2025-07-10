import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { TarefaStatusValidationPipe } from './pipes/tarefa-status-validation.pipe';
import { Tarefas } from './tarefa.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { UsuarioLogado } from 'src/usuario/decorators/usuario.decorator';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@UseGuards(JwtAuthGuard)
@Controller('tarefas') // prefixo: todas as rotas começam com /tarefas
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  async listar(@UsuarioLogado() usuario: UsuarioEntity) {
    return this.tarefasService.findByUsuario(usuario);
  }
  
  // GET /tarefas/:id
  @Get(':id')
  findById(@Param('id') id: string): Promise<Tarefas> {
    return this.tarefasService.findById(id);
  }

  @Post()
  async create(
    @Body() dto: CreateTarefaDto,
    @UsuarioLogado() usuario: UsuarioEntity,
  ) {
    return this.tarefasService.create(dto, usuario);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status', TarefaStatusValidationPipe) status: TarefaStatus,
  ): Promise<Tarefas> {
    return this.tarefasService.updateStatus(id, status);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.tarefasService.delete(id);
  }
}
