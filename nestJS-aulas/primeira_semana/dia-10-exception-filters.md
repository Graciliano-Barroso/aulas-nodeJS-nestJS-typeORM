
# 📘 Dia 10 – Exception Filters (Tratamento de Erros)

---

## 📚 Conteúdo Teórico

### ✅ O que são Exception Filters no Nest.js?

Exception Filters são mecanismos do Nest.js para **tratar erros de forma centralizada e elegante**.

Você pode:
- Usar exceções pré-definidas como `NotFoundException`, `BadRequestException`, etc.
- Criar filtros globais customizados para lidar com erros de forma padronizada.

---

### ✅ Exceções mais comuns no Nest.js

| Classe de Erro         | Código HTTP | Quando usar                            |
|------------------------|-------------|----------------------------------------|
| `NotFoundException`    | 404         | Quando algo não é encontrado           |
| `BadRequestException`  | 400         | Dados inválidos enviados pelo cliente  |
| `UnauthorizedException`| 401         | Acesso não autorizado                  |
| `ForbiddenException`   | 403         | Acesso proibido                        |

---

## 🔧 Atividades Práticas

### 1️⃣ Atualizar método `getTarefaPorId` com exceção personalizada

📄 `tarefas.service.ts`

Substitua:
```ts
if (!tarefa) {
  throw new Error(\`Tarefa com id \${id} não encontrada.\`);
}
```

Por:
```ts
import { NotFoundException } from '@nestjs/common';

if (!tarefa) {
  throw new NotFoundException(\`Tarefa com ID "\${id}" não encontrada\`);
}
```

---

### 2️⃣ Repetir para `deleteTarefa` (caso exista)

Exemplo:
```ts
deleteTarefa(id: number): void {
  const tarefa = this.getTarefaPorId(id);
  this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
}
```

Se o `getTarefaPorId` já lança exceção, o método `deleteTarefa()` herdará esse comportamento.

---

### 3️⃣ Repetir para `atualizarStatus`

📄 `tarefas.service.ts`

```ts
atualizarStatus(id: number, novoStatus: TarefaStatus): Tarefa {
  const tarefa = this.getTarefaPorId(id); // já valida
  tarefa.status = novoStatus;
  return tarefa;
}
```

---

## 🧪 Exercício Final

1. ✅ Garantir que `GET /tarefas/:id` lança `404` se a tarefa não existir
2. ✅ Garantir que `DELETE /tarefas/:id` lança `404` se não for encontrada
3. ✅ Garantir que `PATCH /tarefas/:id/status` lança `404` se o ID for inválido

---

## ✅ O que você aprendeu hoje:

✔ Como lançar exceções com `NotFoundException`  
✔ Como substituir `throw new Error(...)` por exceções do Nest.js  
✔ Como garantir respostas HTTP padronizadas em caso de erro  
✔ Como melhorar a clareza e segurança da sua API com tratamento de erros

---

🎯 Pronto para o 📘 Dia 11 – Trabalhar com dados persistentes usando TypeORM?

Se quiser, posso montar o próximo conteúdo para conectar sua API com um banco de dados!
