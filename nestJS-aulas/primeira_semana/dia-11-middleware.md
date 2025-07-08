
# 📘 Dia 11 – Middleware

---

## 📚 Conteúdo Teórico

### ✅ O que é Middleware no Nest.js?

Middlewares são funções executadas **antes que o request chegue ao controller**. Eles são úteis para:

- Registrar logs
- Verificar autenticação
- Manipular/transformar dados do request

---

### 🔁 Diferenças entre Middleware, Guards e Interceptors

| Conceito     | Executa em...       | Finalidade principal                   |
|--------------|---------------------|----------------------------------------|
| Middleware   | Antes do controller | Pré-processamento, logging             |
| Guard        | Antes do controller | Controle de acesso (autorização)       |
| Interceptor  | Antes e depois      | Modificar request/response, métricas   |

---

## 🔧 Atividades Práticas

### 1️⃣ Gerar middleware

```bash
nest g middleware logger
```

Cria o arquivo: `src/logger.middleware.ts`

---

### 2️⃣ Implementar o middleware de log

📄 `logger.middleware.ts`

```ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${originalUrl}`);
    next(); // passa para o próximo middleware ou controller
  }
}
```

---

### 3️⃣ Aplicar o middleware nas rotas de tarefas

📄 `app.module.ts`

Importe o módulo:

```ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [TarefasModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('tarefas'); // aplica somente às rotas de /tarefas
  }
}
```

---

## 🧪 Exercício

✔ Adicione um log personalizado com:

- Timestamp (`new Date().toISOString()`)
- Método HTTP (`GET`, `POST`, etc.)
- URL acessada (`originalUrl`)

---

## ✅ O que você aprendeu hoje:

✔ O que são e para que servem os middlewares  
✔ Como criar middlewares com o Nest CLI  
✔ Como aplicar middlewares globalmente ou em rotas específicas  
✔ Como registrar logs com timestamp e rota acessada

---

🎯 Pronto para o 📘 Dia 12 – Guards de Autenticação com JWT?

Se quiser, posso montar o próximo conteúdo!
