
# 📘 Dia 9 – Pipes Customizados

---

## 📚 Conteúdo Teórico

### ✅ O que são Pipes Customizados?

Pipes customizados são classes que você cria para realizar **validação ou transformação personalizada** dos dados antes que eles sejam processados por controllers.

Eles são muito úteis para:
- Validar enums (como status)
- Transformar strings em tipos específicos
- Aplicar regras de negócio em parâmetros de rota, query ou body

---

## 🎯 Objetivo do Dia

Criar um **pipe de validação de status de tarefa** que:
- Aceita apenas valores válidos definidos no enum `TarefaStatus`
- Rejeita valores inválidos com uma exceção amigável (`BadRequestException`)

---

## 🔧 Atividades Práticas

### 1️⃣ Criar o arquivo do Pipe

📄 `src/tarefas/pipes/tarefa-status-validation.pipe.ts`

```ts
import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TarefaStatus } from '../enums/tarefa-status.enum';

export class TarefaStatusValidationPipe implements PipeTransform {
  readonly statusPermitidos = [
    TarefaStatus.ABERTA,
    TarefaStatus.EM_ANDAMENTO,
    TarefaStatus.FINALIZADA,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.statusValido(value)) {
      throw new BadRequestException(`Status inválido: ${value}`);
    }

    return value;
  }

  private statusValido(status: any) {
    return this.statusPermitidos.includes(status);
  }
}
```

---

### 2️⃣ Usar o Pipe no controller

📄 `tarefas.controller.ts`

```ts
import { TarefaStatusValidationPipe } from './pipes/tarefa-status-validation.pipe';

@Patch(':id/status')
atualizarStatus(
  @Param('id') id: string,
  @Body('status', TarefaStatusValidationPipe) status: TarefaStatus,
): Tarefa {
  return this.tarefasService.atualizarStatus(Number(id), status);
}
```

---

### 3️⃣ Testar com Postman

**Rota:**

```
PATCH /tarefas/123456789/status
```

**Corpo válido:**

```json
{
  "status": "EM_ANDAMENTO"
}
```

**Corpo inválido:**

```json
{
  "status": "concluida"
}
```

🔴 Esperado: retorno 400 com mensagem:

```
{
  "statusCode": 400,
  "message": "Status inválido: CONCLUIDA",
  "error": "Bad Request"
}
```

---

## ✅ O que você aprendeu hoje:

✔ Como criar pipes customizados  
✔ Como usar pipe para validar parâmetros (`@Body`, `@Param`)  
✔ Como evitar códigos duplicados de validação  
✔ Como lançar exceções personalizadas usando `BadRequestException`

---

🎯 Pronto para o 📘 Dia 10 – Tratamento de exceções com `HttpException` e filtros globais?

Se quiser, posso montar o próximo conteúdo!
