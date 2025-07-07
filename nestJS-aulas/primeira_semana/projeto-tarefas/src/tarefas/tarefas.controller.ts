import { BadRequestException, Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { FilterTarefasDto } from './dto/filter-tarefas.dto';

@Controller('tarefas') // prefixo: todas as rotas começam com /tarefas
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  // GET /tarefas?status=ABERTA&termo=algo
@Get()
getTarefas(@Query() filtroDto: FilterTarefasDto): Tarefa[] {
  if (Object.keys(filtroDto).length) {
    return this.tarefasService.filtrarTarefas(filtroDto);
  }
  return this.tarefasService.getTodasTarefas();
}

  // GET /tarefas/:id
  @Get(':id')
  getTarefaPorId(@Param('id') id: string): Tarefa {
    return this.tarefasService.getTarefaPorId(parseInt(id));
  }

  @Post()
  createTarefa(@Body() createTarefaDto: CreateTarefaDto): Tarefa {
    return this.tarefasService.createTarefa(createTarefaDto);
  }

  @Patch(':id/status')
  atualizarStatus(
    @Param('id') id: string,
    @Body('status') status: TarefaStatus,
  ): Tarefa {
    return this.tarefasService.atualizarStatus(Number(id), status);
  }
}
