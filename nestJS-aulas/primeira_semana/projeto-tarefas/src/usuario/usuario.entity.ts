import { Tarefas } from 'src/tarefas/tarefa.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column()
  nome: string;

  @OneToMany(() => Tarefas, tarefa => tarefa.usuario)
  tarefas: Tarefas[];
}
