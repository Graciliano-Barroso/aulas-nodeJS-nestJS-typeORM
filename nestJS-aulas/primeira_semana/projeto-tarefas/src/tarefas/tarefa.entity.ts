import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { TarefaStatus } from './enums/tarefa-status.enum';

@Entity()
export class TarefaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  status: TarefaStatus;

  @Column({ default: false })
  arquivada: boolean;

  @CreateDateColumn()
  dataCriacao: Date;
}
