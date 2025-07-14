import { TarefaStatus } from './enums/tarefa-status.enum';

export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  status: TarefaStatus;
}
