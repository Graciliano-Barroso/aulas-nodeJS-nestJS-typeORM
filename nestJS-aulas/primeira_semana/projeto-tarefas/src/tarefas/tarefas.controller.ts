import { Controller, Get, Param } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

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
  getTarefaPorId(@Param('id') id: string) {
    return this.tarefasService.getTarefaPorId(parseInt(id));
  }

  // GET /tarefas/status/:status
  @Get('status/:status')
  getTarefasPorStatus(@Param('status') status: string) {
    return this.tarefasService.getTarefasPorStatus(status);
  }
}
