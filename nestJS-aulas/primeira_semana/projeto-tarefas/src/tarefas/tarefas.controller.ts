import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './enums/tarefa-status.enum';

@Controller('tarefas') // prefixo: todas as rotas começam com /tarefas
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  // GET /tarefas
  @Get()
  getTodasTarefas() {
    return this.tarefasService.getTodasTarefas();
  }

  // GET /tarefas/:id
  @Get(':id')
  getTarefaPorId(@Param('id') id: string): Tarefa {
    return this.tarefasService.getTarefaPorId(parseInt(id));
  }

  // GET /tarefas/status/:status
  @Get('status/:status')
  getTarefasPorStatus(@Param('status') status: string): Tarefa[] {
    return this.tarefasService.filtrarTarefasPorStatus(status);
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
