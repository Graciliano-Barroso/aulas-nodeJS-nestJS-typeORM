import { TarefaStatus } from './tarefa-status.enum';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: TarefaStatus;
}
