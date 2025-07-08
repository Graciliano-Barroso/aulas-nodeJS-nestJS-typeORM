import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async registrar(
    nome: string,
    email: string,
    senha: string,
  ): Promise<UsuarioEntity> {
    const salt = await bcrypt.genSalt();
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const novoUsuario = this.usuarioRepository.create({
      nome,
      email,
      senha: senhaCriptografada,
    });

    return this.usuarioRepository.save(novoUsuario)
  }

  async buscarPorEmail(email: string): Promise<UsuarioEntity | null> {
    return this.usuarioRepository.findOne({ where: { email } })
  }
}
