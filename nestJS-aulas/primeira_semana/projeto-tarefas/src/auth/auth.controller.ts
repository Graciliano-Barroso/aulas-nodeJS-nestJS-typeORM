import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginAuthDto } from "./dto/login-auth.dto";

@ApiTags("Autenticação") 
@Controller("auth")
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post("login")
   @ApiBody({ description: "Credenciais do usuário para login" })
   @ApiResponse({ status: 201, description: "Token JWT gerado com sucesso" })
   @ApiResponse({ status: 401, description: "Usuário ou senha inválidos" })
   login(@Body() loginDto: LoginAuthDto) {
      return this.authService.login(loginDto);
   }
}
