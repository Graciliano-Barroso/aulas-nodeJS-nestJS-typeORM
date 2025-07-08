import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
