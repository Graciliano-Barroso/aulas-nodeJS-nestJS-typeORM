import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { TarefaStatusValidationPipe } from './pipes/tarefa-status-validation.pipe';
import { TarefaEntity } from './tarefa.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tarefas') // prefixo: todas as rotas começam com /tarefas
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  // GET /tarefas?status=ABERTA&termo=algo
  @Get()
  findAll(): Promise<TarefaEntity[]> {
    return this.tarefasService.findAll();
  }

  // GET /tarefas/:id
  @Get(':id')
  findById(@Param('id') id: string): Promise<TarefaEntity> {
    return this.tarefasService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateTarefaDto): Promise<TarefaEntity> {
    return this.tarefasService.create(dto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status', TarefaStatusValidationPipe) status: TarefaStatus,
  ): Promise<TarefaEntity> {
    return this.tarefasService.updateStatus(id, status);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.tarefasService.delete(id);
  }
}
