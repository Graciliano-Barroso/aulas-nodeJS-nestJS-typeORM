import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcryptjs';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
    constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginAuthDto): Promise<{ access_token: string }> {
    const { email, senha } = loginDto;
    const usuario = await this.usuarioService.findByEmail(email);

    if (!usuario) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { sub: usuario.id, email: usuario.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
