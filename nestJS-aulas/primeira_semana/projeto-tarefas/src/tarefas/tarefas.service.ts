import { Injectable } from '@nestjs/common';

@Injectable()
export class TarefasService {
  private tarefas = [
    { id: 1, titulo: 'Estudar Nest.js', status: 'ABERTA' },
    { id: 2, titulo: 'Fazer exercícios', status: 'EM_ANDAMENTO' },
    { id: 3, titulo: 'Revisar conteúdo do Dia 2', status: 'FINALIZADA' },
  ];

  getTodasTarefas() {
    return this.tarefas;
  }

  getTarefaPorId(id: number) {
    return this.tarefas.find((tarefa) => tarefa.id === id);
  }

  getTarefasPorStatus(status: string) {
    return this.tarefas.filter((t) => t.status === status.toUpperCase());
  }
}
