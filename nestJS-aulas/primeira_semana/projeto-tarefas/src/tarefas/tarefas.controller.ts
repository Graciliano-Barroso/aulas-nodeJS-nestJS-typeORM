import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { FilterTarefasDto } from './dto/filter-tarefas.dto';
import { TarefaStatusValidationPipe } from './pipes/tarefa-status-validation.pipe';
import { AuthGuard } from 'src/auth/auth.guard';
import { TarefaEntity } from './tarefa.entity';

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
  @UseGuards(AuthGuard)
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
