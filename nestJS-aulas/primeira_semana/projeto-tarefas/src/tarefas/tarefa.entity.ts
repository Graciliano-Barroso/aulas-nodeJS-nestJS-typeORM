import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { TarefaStatus } from './enums/tarefa-status.enum';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity('tarefas')
export class Tarefas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  status: TarefaStatus;
  
  @CreateDateColumn()
  dataCriacao: Date;

  @Column({ default: false })
  arquivada: boolean;

  @ManyToOne(() => UsuarioEntity, usuario => usuario.tarefas, { eager: false })
  usuario: UsuarioEntity;
}
