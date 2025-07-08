import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios') // <-- prefixo da rota
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('registrar') // <-- POST /usuarios/registrar
  async registrar(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.registrar(dto.nome, dto.email, dto.senha);
  }
}
