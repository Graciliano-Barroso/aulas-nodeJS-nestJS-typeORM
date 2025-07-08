
# 📘 Dia 12 – Guards (Autenticação Básica)

---

## 📚 Conteúdo Teórico

### ✅ O que são Guards no Nest.js?

Guards são mecanismos de segurança que **controlam se uma requisição pode continuar** até o controller ou não.

Eles são muito usados para:
- Verificar autenticação (JWT, tokens, etc)
- Checar permissões (roles)
- Restringir acesso por lógica personalizada

---

## 🧱 Estrutura básica de um Guard

```ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class MeuGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // lógica de permissão
    return true;
  }
}
```

---

## 🔧 Atividades Práticas

### 1️⃣ Criar um Guard chamado `AuthGuard`

```bash
nest g guard auth
```

---

### 2️⃣ Implementar o guard de autenticação simples

📄 `auth.guard.ts`

```ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (authHeader === 'meutoken123') {
      return true;
    }

    throw new UnauthorizedException('Token inválido ou ausente');
  }
}
```

---

### 3️⃣ Usar o guard na rota protegida

📄 `tarefas.controller.ts`

```ts
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard'; // ou o caminho correspondente

@Post()
@UseGuards(AuthGuard)
createTarefa(@Body() createTarefaDto: CreateTarefaDto): Tarefa {
  return this.tarefasService.createTarefa(createTarefaDto);
}
```

---

## 🧪 Exercício

✔ Aplique o guard apenas no método `POST /tarefas`  
✔ Teste com o Postman ou Insomnia:

- Enviar sem header `authorization`: ❌ recebe erro 401
- Enviar com `authorization: meutoken123`: ✅ tarefa criada com sucesso

---

## ✅ O que você aprendeu hoje:

✔ Como criar guards no Nest.js  
✔ Como interceptar requisições antes do controller  
✔ Como fazer uma autenticação simples com token hardcoded  
✔ Como proteger rotas usando `@UseGuards()`

---

🎯 Em breve: 📘 Dia 13 – Autenticação com JWT real (token dinâmico e login)!
