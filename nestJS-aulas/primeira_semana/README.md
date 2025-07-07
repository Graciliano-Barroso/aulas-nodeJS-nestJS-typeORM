# 🗂️ Plano de Estudo – Nest.js (Semana 1)

> 🎯 Objetivo: Entender a arquitetura do Nest.js, saber criar módulos, controladores e serviços, e iniciar uma API RESTful organizada.

<!-- markdownlint-disable MD033 -->
<br/>
<hr/>
<br/>

🛠️ Pré-requisitos antes de começar

- Node.js instalado

- Conhecimento básico de TypeScript

- Comandos básicos de terminal

- Editor (VS Code)

<br/>
<hr/>
<br/>

📦 Instalação do Nest.js CLI

```bash
npm i -g @nestjs/cli
nest new projeto-tarefas
```

<br/>
<hr/>
<br/>

🗓️ Dia 1 – Introdução ao Nest.js

📚 Conteúdo – Dia 1

- O que é Nest.js e por que usá-lo?

- Arquitetura baseada em módulos e injeção de dependência

- Como funciona o padrão MVC no Nest

- Primeira execução de um projeto

🔧 Atividades - Dia 1

- Instalar o Nest CLI e criar projeto com `nest new`

- Explorar os arquivos gerados (`main.ts`, `app.module.ts`, etc.)

- Rodar o servidor: `npm run start:dev`

🧪 Exercício - Dia 1

Adicionar um `console.log()` no `main.ts` para verificar o ambiente.

<br/>
<hr/>
<br/>

🗓️ Dia 2 – Controladores (Controllers)

📚 Conteúdo - Dia 2

- O que são controladores

- Decoradores como `@Controller()` e `@Get()`

- Rotas e parâmetros de rota

🔧 Atividades - Dia 2

- Criar um controlador `tarefas.controller.ts`:

```bash
nest g controller tarefas
```

- Criar métodos `GET /tarefas`, `GET /tarefas/:id`

🧪 Exercício - Dia 2

Adicionar mais uma rota: `GET /tarefas/status/:status`

<br/>
<hr/>
<br/>

🗓️ Dia 3 – Serviços (Services)

📚 Conteúdo - Dia 3

- O que são serviços

- `@Injectable()`: como funciona a injeção de dependência

- Separando a lógica de negócio

🔧 Atividades - Dia 3

Criar serviço `tarefas.service.ts`:

```bash
nest g service tarefas
```

- Mover lógica de listagem de tarefas para o serviço

🧪 Exercício - Dia 3

Criar um método `getTarefaPorId(id: string)` no serviço e usá-lo no controller

<br/>
<hr/>
<br/>

🗓️ Dia 4 – DTOs e Tipagem

📚 Conteúdo - Dia 4

- Criando interfaces ou classes para tipos

- O que é DTO (Data Transfer Object)

- Validação básica de dados com TypeScript

🔧 Atividades - Dia 4

- Criar DTO `create-tarefa.dto.ts` com `titulo` e `descricao`

- Criar tipo `Tarefa` com status enum

🧪 Exercício - Dia 4

🧪 Exercício:
Adicionar lógica para `POST /tarefas` com DTO

<br/>
<hr/>
<br/>

🗓️ Dia 5 – Injeção de dependência e boas práticas

📚 Conteúdo - Dia 5

- Injeção de serviços com o `constructor()`

- Boa prática: separar DTOs, entidades, módulos

- Criar status enum para tarefas: `ABERTA`, `EM_ANDAMENTO`, `FINALIZADA`

🔧 Atividades - Dia 5

- Atualizar o método `createTarefa()` para usar status padrão `ABERTA`

🧪 Exercício - Dia 5

- Criar um método `filtrarTarefasPorStatus(status: string)`

<br/>
<hr/>
<br/>

🗓️ Dia 6 – Módulos

📚 Conteúdo - Dia 6

- Entendendo o que são módulos

- Dividindo responsabilidades por domínio

- Reutilização de módulos em aplicações grandes

🔧 Atividades - Dia 6

- Criar novo módulo para tarefas (caso não tenha sido criado junto com controller):

```bash
nest g module tarefas
```

- Garantir que o módulo está importando controller e serviço corretamente

<br/>
<hr/>
<br/>

🗓️ Dia 7 – Revisão e prática

📚 Conteúdo

- Revisar: controller → chama → service → retorna resposta

- Criar mini projeto de API de tarefas (em memória, sem banco de dados)

🧪 Exercício final da semana

Criar uma API de tarefas com os seguintes endpoints:

- `GET /tarefas`: listar todas

- `GET /tarefas/:id`: listar por ID

- `POST /tarefas`: criar tarefa

- `DELETE /tarefas/:id`: remover tarefa

- `PATCH /tarefas/:id/status`: atualizar status

<br/>
<hr/>
<br/>

📦 Pastas organizadas no final da semana

```lua
src/
├── tarefas/
│   ├── dto/
│   │   └── create-tarefa.dto.ts
│   ├── tarefas.controller.ts
│   ├── tarefas.service.ts
│   ├── tarefas.module.ts
├── main.ts
└── app.module.ts
```

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início da 2ª semana 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

<!-- markdownlint-disable MD025 -->
# 🗂️ Plano de Estudo – Nest.js (Semana 2)

> 🎯 Objetivo: Aprimorar sua API com validações, autenticação básica, tratamento de erros e preparar para integração com banco de dados (TypeORM).

<br/>
<hr/>
<br/>

🗓️ Dia 8 – Pipes e validação de dados

📚 Conteúdo

- O que são Pipes no Nest.js

- Usando `@Body()` com DTOs

- Usando `class-validator` e `class-transformer`

🔧 Atividades

- Instalar os pacotes:

```bash
npm install class-validator class-transformer
```

- Criar validador no `create-tarefa.dto.ts`:

```typescript
import { IsString, IsEnum } from "class-validator";

export class CreateTarefaDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;
}
```

🧪 Exercício

- Criar um `FilterDto` para buscar tarefas por `status` e `termo` com validação usando `@IsOptional()`.

<br/>
<hr/>
<br/>

🗓️ Dia 9 – Pipes customizados

📚 Conteúdo

- Criar um pipe de validação de status

- Usar `@Param()` com pipes

🔧 Atividades

- Criar `TarefaStatusValidationPipe`

- Validar se `status` recebido é válido (enum)

🧪 Exercício

- Adicionar pipe no endpoint `PATCH /tarefas/:id/status`

<br/>
<hr/>
<br/>

🗓️ Dia 10 – Exception Filters (tratamento de erros)

📚 Conteúdo

- O que são filtros de exceção

- Usando HttpException e NotFoundException

- Criar filtro global customizado (opcional)

🔧 Atividades

- Criar exceção personalizada se uma tarefa não for encontrada.

```typescript
throw new NotFoundException(`Tarefa com ID "${id}" não encontrada`);
```

🧪 Exercício

Adicionar exceções personalizadas para os métodos `GET`, `DELETE` e `UPDATE`.

<br/>
<hr/>
<br/>

🗓️ Dia 11 – Middleware

📚 Conteúdo

- O que é middleware no Nest.js

- Diferença entre middleware, guards e interceptadores

- Aplicar middleware globalmente ou por rota

🔧 Atividades

- Criar middleware de log:

```bash
nest g middleware logger
```

- Aplicar nas rotas de tarefas

🧪 Exercício

- Adicionar timestamp e rota acessada no log.

<br/>
<hr/>
<br/>

🗓️ Dia 12 – Guards (autenticação básica)

📚 Conteúdo

- O que são guards

- Criar um guard simples (ex: autenticação via token hardcoded)

- Usar `@UseGuards()` no controller

🔧 Atividades

- Criar `AuthGuard` que verifica se `authorization` tem token `meutoken123`.

🧪 Exercício

- Proteger rota de criação de tarefas com guard.

<br/>
<hr/>
<br/>

🗓️ Dia 13 – Configuração com .env e instalação de TypeORM

📚 Conteúdo

- Uso do pacote `@nestjs/config`

- Criar `.env` para credenciais de banco

- Instalar pacotes do TypeORM

```bash
npm install --save @nestjs/typeorm typeorm pg
```

🔧 Atividades

- Criar `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=usuario
DB_PASSWORD=senha
DB_NAME=nest_tarefas
```

- Configurar `TypeOrmModule.forRootAsync()` em `app.module.ts`

🧪 Exercício

- Simular a conexão (sem entidades ainda), garantir que app inicia com sucesso.

<br/>
<hr/>
<br/>

🗓️ Dia 14 – Preparar para uso do banco com TypeORM

📚 Conteúdo

- O que são entidades

- Introdução a decorators do TypeORM

- Diferença entre entidades e DTOs

- Visão geral de `repository`, `migration`, `relation`

🔧 Atividades

- Criar a primeira entidade `TarefaEntity` com os campos `id`, `titulo`, `descricao`, `status`, `dataCriacao`.

```ts
@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  status: TarefaStatus;

  @CreateDateColumn()
  dataCriacao: Date;
}
```

<br/>
<hr/>
<br/>

🧠 Ao final da semana, você terá

✅ API validando dados
✅ Erros tratados corretamente
✅ Middleware e autenticação básica funcionando
✅ Projeto pronto para usar TypeORM com banco de dados real

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início da 3ª semana 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 🗂️ Plano de Estudo – Nest.js (Semana 3)

> 🎯 Objetivo: Persistência com banco de dados usando TypeORM, criação de entidades, relacionamento, autenticação com JWT e finalização de um projeto completo.

<br/>
<hr/>
<br/>

🗓️ Dia 15 – Integrar TypeORM com Nest.js

📚 Conteúdo

- Relembrar `.env` com variáveis de conexão

- Importar `TypeOrmModule` no `AppModule`

- Conectar ao PostgreSQL (ou outro)

🔧 Atividades

- Configurar `TypeOrmModule.forRoot()` com dados do `.env`

- Testar conexão

- Criar entidade `TarefaEntity`

```ts
@Entity("tarefas")
export class TarefaEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  status: TarefaStatus;
}
```

🧪 Exercício

- Criar repositório de tarefas e salvar tarefa no banco.

<br/>
<hr/>
<br/>

🗓️ Dia 16 – CRUD com banco de dados

📚 Conteúdo

- Criar `TarefaRepository`

- Uso do `InjectRepository`

- Métodos: `save`, `find`, `findOne`, `delete`

🔧 Atividades:
Refatorar `tarefas.service.ts` para usar o banco de dados em vez de array

🧪 Exercício:
Implementar os métodos: `findAll`, `findById`, `create`, `delete`, `updateStatus`

<br/>
<hr/>
<br/>

🗓️ Dia 17 – Autenticação com JWT (parte 1)

📚 Conteúdo

- Criar módulo de usuários

- Criar entidade `UsuarioEntity`

- Instalar pacotes:

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcryptjs
```

🔧 Atividades

- Criar `UsuarioModule`, `UsuarioService`, `UsuarioEntity`

- Registrar e salvar novo usuário com senha criptografada (bcrypt)

<br/>
<hr/>
<br/>

🗓️ Dia 18 – Autenticação com JWT (parte 2)

📚 Conteúdo

- Criar `AuthModule` e serviço de autenticação

- Validar login, gerar token JWT

- Criar Guard com Passport para proteger rotas

🔧 Atividades

- Criar rota `POST /auth/login`

Implementar `JwtStrategy` para validar token

🧪 Exercício

- Proteger rotas de tarefas com `@UseGuards(AuthGuard())`

<br/>
<hr/>
<br/>

🗓️ Dia 19 – Relacionamentos com TypeORM

📚 Conteúdo

- Criar relacionamento `User → Tarefa` (1:N)

- Usar `@ManyToOne()` e `@OneToMany()`

🔧 Atividades

- Alterar entidade `TarefaEntity` para ter um campo `usuario`

```ts
@ManyToOne(() => UsuarioEntity, usuario => usuario.tarefas, { eager: false })
usuario: UsuarioEntity;
```

- Ajustar criação de tarefas para registrar o usuário dono da tarefa

🧪 Exercício

- Buscar tarefas de um usuário logado (usando o token JWT)

<br/>
<hr/>
<br/>

🗓️ Dia 20 – Filtros, DTOs avançados e refatorações

📚 Conteúdo

- Criar DTO para login e registro

- DTOs para atualizar tarefas com validações

- Filtros com parâmetros opcionais

🔧 Atividades

- Refatorar rotas para usar DTOs consistentes

- Criar filtros por status, título e usuário

🧪 Exercício

- Adicionar `GET /tarefas?status=ABERTA&busca=texto` usando query params

<br/>
<hr/>
<br/>

🗓️ Dia 21 – Finalizando o projeto

📚 Conteúdo

- Testar todas as rotas

- Documentar API com Swagger

- Preparar deploy local (opcional)

🔧 Atividades

- Instalar Swagger:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

- Documentar rotas com decorators `@ApiTags`, `@ApiBody`, `@ApiResponse`, etc.

# 📦 Estrutura do projeto ao final da 3ª semana

```cpp
src/
├── auth/
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   └── dtos/
├── usuario/
│   ├── usuario.entity.ts
│   ├── usuario.service.ts
├── tarefas/
│   ├── tarefa.entity.ts
│   ├── tarefas.controller.ts
│   ├── tarefas.service.ts
├── common/
│   └── pipes/
├── main.ts
├── app.module.ts
```

<br/>
<hr/>
<br/>

✅ Ao final da 3ª semana, você terá

- API com banco de dados real (PostgreSQL ou outro)

- CRUD completo persistente com autenticação

- Validação com DTOs e Pipes

- Segurança com JWT e Guards

- Relacionamentos com usuários e entidades protegidas

- Documentação com Swagger

#

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 1º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 1 – Introdução ao Nest.js

📚 Conteúdo

## ✅ O que é o Nest.js?

- Nest.js é um framework Node.js para a construção de aplicações escaláveis, eficientes e modularizadas, baseado em TypeScript.

- Ele utiliza princípios de Programação Orientada a Objetos, Programação Funcional e Arquitetura Modular.

## ✅ Por que usar Nest.js?

- Código limpo e estruturado (sem caos de arquivos soltos)

- Baseado em módulos: cada domínio da aplicação tem seu próprio módulo

- Compatível com bibliotecas do Express e Fastify

- Suporte nativo a TypeORM, JWT, Swagger, WebSockets e muito mais

- Fácil escalabilidade para projetos grandes

## ✅ Arquitetura e Injeção de Dependência

- Usa arquitetura modular: divide funcionalidades em módulos (ex: TarefasModule, UsuarioModule)

- Usa Injeção de Dependência (DI) para desacoplar classes: os serviços são injetados nos controladores via construtor

- Baseado no padrão MVC: Controller → Service → Repository (quando usa banco)

<br/>
<hr/>
<br/>

## 🔧 Atividades Práticas

1️⃣ Instalar o Nest CLI

```bash
npm install -g @nestjs/cli
```

2️⃣ Criar um novo projeto Nest

```bash
nest new projeto-tarefas
```

Você será perguntado qual gerenciador de pacotes deseja usar. Pode escolher `npm` ou `yarn`.

3️⃣ Estrutura de arquivos gerada

Após a criação, observe os principais arquivos:

```bash
projeto-tarefas/
├── src/
│   ├── app.controller.ts        // Controlador padrão
│   ├── app.service.ts           // Serviço padrão
│   ├── app.module.ts            // Módulo raiz
│   └── main.ts                  // Ponto de entrada da aplicação
├── test/                        // Testes gerados automaticamente
├── package.json                 // Dependências e scripts
├── tsconfig.json                // Configuração TypeScript
```

4️⃣ Rodar o servidor de desenvolvimento

Acesse a pasta do projeto:

```bash
cd projeto-tarefas
npm run start:dev
```

Você verá algo como:

```bash
[Nest] 3456  - 23/06/2025, 14:00:00   [NestFactory] Starting Nest application...
[Nest] 3456  - 23/06/2025, 14:00:01   [RoutesResolver] AppController {/}: +1 route
[Nest] 3456  - 23/06/2025, 14:00:01   [NestApplication] Nest application successfully started on port 3000
```

Acesse <http://localhost:3000> e verá a mensagem:

```bash
Hello World!
```

<br/>
<hr/>
<br/>

## 🧪 Exercício Final

Abra o arquivo `src/main.ts` e adicione um `console.log()` para verificar se o ambiente está em desenvolvimento:

```ts
async function bootstrap() {
  console.log("Ambiente atual:", process.env.NODE_ENV || "desenvolvimento");

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

Execute novamente com:

```bash
npm run start:dev
```

Verifique no terminal a saída do console.

<br/>
<hr/>
<br/>

✅ O que você aprendeu hoje:
✔ O que é o Nest.js e por que ele é utilizado
✔ Como criar um projeto usando Nest CLI
✔ Como a arquitetura modular funciona
✔ Como rodar e explorar a estrutura inicial do projeto
✔ Como modificar o ponto de entrada e testar algo no console

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 2º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 **Dia 2 – Controladores no Nest.js**

📚 **Conteúdo Teórico**

## ✅ O que são controladores?

No Nest.js, os **Controllers** (controladores) são responsáveis por lidar com as **requisições** HTTP. Eles recebem os dados da requisição, **chamam os serviços** responsáveis pela lógica de negócio e devolvem uma resposta ao cliente.

<br/>
<hr/>
<br/>

## ✅ Decoradores principais

Nest usa decoradores para definir rotas e comportamento:

| Decorador                                  | Descrição                                    |
| ------------------------------------------ | -------------------------------------------- |
| `@Controller('rota')`                      | Define o prefixo da rota do controller       |
| `@Get()`, `@Post()`, `@Put()`, `@Delete()` | Define o tipo de requisição HTTP             |
| `@Param()`                                 | Captura parâmetros da URL                    |
| `@Query()`                                 | Captura parâmetros de query string           |
| `@Body()`                                  | Captura o corpo da requisição (em POST, PUT) |

<br/>
<hr/>
<br/>

<!-- markdownlint-disable MD024 -->
## 🔧 Atividades Práticas

1️⃣ Criar um controller chamado `tarefas`

No terminal, dentro da pasta do projeto:

```bash
nest g controller tarefas
```

> Isso criará um novo controller em `src/tarefas/tarefas.controller.ts`

<br/>
<hr/>
<br/>

2️⃣ Editar o controller para adicionar rotas `GET`

Abra `src/tarefas/tarefas.controller.ts` e adicione os seguintes métodos:

```ts
import { Controller, Get, Param } from "@nestjs/common";

@Controller("tarefas") // prefixo: todas as rotas começam com /tarefas
export class TarefasController {
  private tarefas = [
    { id: 1, titulo: "Estudar Nest.js", status: "ABERTA" },
    { id: 2, titulo: "Fazer exercícios", status: "EM_ANDAMENTO" },
  ];

  // GET /tarefas
  @Get()
  getTodasTarefas() {
    return this.tarefas;
  }

  // GET /tarefas/:id
  @Get(":id")
  getTarefaPorId(@Param("id") id: string) {
    return this.tarefas.find((tarefa) => tarefa.id === parseInt(id));
  }

  // GET /tarefas/status/:status
  @Get("status/:status")
  getTarefasPorStatus(@Param("status") status: string) {
    return this.tarefas.filter(
      (tarefa) => tarefa.status === status.toUpperCase()
    );
  }
}
```

<br/>
<hr/>
<br/>

## 🚀 Testando no navegador ou Postman

- `GET http://localhost:3000/tarefas` → retorna todas as tarefas

- `GET http://localhost:3000/tarefas/1` → retorna tarefa com ID 1

- `GET http://localhost:3000/tarefas/status/aberta` → retorna todas com status ABERTA

<br/>
<hr/>
<br/>

## 🧪 Exercício Final

Adicione uma nova tarefa ao array e teste as rotas. Exemplo:

```ts
{ id: 3, titulo: 'Revisar conteúdo do Dia 2', status: 'FINALIZADA' }
```

Depois teste:

- `GET /tarefas/3`

- `GET /tarefas/status/finalizada`

<br/>
<hr/>
<br/>

<!-- markdownlint-disable MD026 -->
## ✅ O que você aprendeu hoje:

✔ Criar um controller com o CLI (`nest g controller`)
✔ Usar os decoradores `@Controller()`, `@Get()`, `@Param()`
✔ Criar rotas com parâmetros dinâmicos
✔ Retornar dados estáticos para testes iniciais
✔ Preparar o terreno para conectar com serviços (Dia 3)`

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 3º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 3 – Serviços no Nest.js

📚 Conteúdo Teórico

## ✅ O que são serviços no Nest.js?

- Services (ou serviços) são responsáveis por conter a lógica de negócio da aplicação.

- Enquanto os controllers lidam com as requisições e respostas HTTP, os serviços executam o que realmente precisa ser feito.

> ✨ Eles promovem a separação de responsabilidades (princípio SOLID: Single Responsibility).

<br/>
<hr/>
<br/>

## ✅ `@Injectable()` e Injeção de Dependência

- O decorator `@Injectable()` diz ao Nest.js que aquela classe pode ser injetada em outras classes via o construtor.

- Isso permite que o Nest.js gere automaticamente instâncias dos serviços e controle o ciclo de vida deles.

<br/>
<hr/>
<br/>

## 🔧 Atividades Práticas

1️⃣ Criar o serviço de tarefas

No terminal:

```bash
nest g service tarefas
```

> Isso vai gerar o arquivo `tarefas.service.ts` dentro da pasta `src/tarefas`.`

<br/>
<hr/>
<br/>

2️⃣ Mover a lógica para o serviço

Abra `src/tarefas/tarefas.service.ts` e adicione a seguinte implementação:

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class TarefasService {
  private tarefas = [
    { id: 1, titulo: "Estudar Nest.js", status: "ABERTA" },
    { id: 2, titulo: "Fazer exercícios", status: "EM_ANDAMENTO" },
    { id: 3, titulo: "Revisar conteúdo do Dia 2", status: "FINALIZADA" },
  ];

  getTodasTarefas() {
    return this.tarefas;
  }

  getTarefaPorId(id: number) {
    return this.tarefas.find((tarefa) => tarefa.id === id);
  }

  getTarefasPorStatus(status: string) {
    return this.tarefas.filter((t) => t.status === status.toUpperCase());
  }
}
```

<br/>
<hr/>
<br/>

3️⃣ Injetar o serviço no controller

Abra `src/tarefas/tarefas.controller.ts` e modifique para usar o serviço:

```ts
import { Controller, Get, Param } from "@nestjs/common";
import { TarefasService } from "./tarefas.service";

@Controller("tarefas")
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  getTodasTarefas() {
    return this.tarefasService.getTodasTarefas();
  }

  @Get(":id")
  getTarefaPorId(@Param("id") id: string) {
    return this.tarefasService.getTarefaPorId(parseInt(id));
  }

  @Get("status/:status")
  getTarefasPorStatus(@Param("status") status: string) {
    return this.tarefasService.getTarefasPorStatus(status);
  }
}
```

<br/>
<hr/>
<br/>

⚠️ Atenção
Caso você veja erro como `Nest can't resolve dependencies of the TarefasController`, certifique-se de que o `TarefasService` está declarado no módulo `TarefasModule` (ou no `AppModule`, se ainda não criou um módulo próprio):

```ts
@Module({
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
```

⚠️ Atenção
Não foi criado um modo próprio para declarar o módulo `TarefasModule` por isso você precisa declarar `TarefasService` no `AppModule`.

Vai ficar assim:

```ts
@Module({
  controllers: [AppController, TarefasController],
  providers: [AppService, TarefasService],
})
export class AppModule {}
```

## 🧪 Exercício Final

Crie o método `getTarefaPorId(id: string)` no serviço (já feito acima) e:

1. Refatore o controller para usar esse método.

2. Teste a rota `GET /tarefas/:id` com valores existentes e inexistentes.

3. Tente retornar uma mensagem personalizada se não encontrar nenhuma tarefa (opcional para o próximo dia, quando trataremos erros).

<br/>
<hr/>
<br/>

## ✅ O que você aprendeu hoje:

✔ O que é um serviço no Nest.js
✔ Como criar um serviço com `@Injectable()`
✔ Como aplicar injeção de dependência no controller
✔ Como separar a lógica de negócio do controller
✔ Como preparar seu projeto para escalar de forma organizada

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 4º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 4 – DTOs e Tipagem no Nest.js

📚 Conteúdo Teórico

## ✅ O que é um DTO (Data Transfer Object)?

- DTO é uma classe que define a forma dos dados que são enviados ou recebidos pela sua API.

- Serve como contrato entre quem envia e quem recebe dados.

- Com Nest.js (e TypeScript), os DTOs são usados junto com validações e decorators.

<br/>
<hr/>
<br/>

## ✅ Interfaces ou Classes para tipos

- Você pode definir tipos com `interface` ou `class`.

- Nest.js recomenda o uso de classes, pois elas funcionam com bibliotecas de validação como `class-validator`.

<br/>
<hr/>
<br/>

## ✅ Validação com TypeScript

- Com TypeScript, é possível garantir a estrutura dos objetos e melhorar a inteligência do editor.

- Podemos usar tipos enumerados (enum) para restringir valores possíveis, como status de uma tarefa.

<br/>
<hr/>
<br/>

## 🔧 Atividades Práticas

1️⃣ Criar um DTO de criação de tarefa

Crie o arquivo:

📁 `src/tarefas/dto/create-tarefa.dto.ts`

```ts
export class CreateTarefaDto {
  titulo: string;
  descricao: string;
}
```

> Essa classe representa os dados esperados na criação de uma tarefa.

<br/>
<hr/>
<br/>

2️⃣ Criar um enum de status de tarefa

Crie o arquivo:

📁 `src/tarefas/tarefa-status.enum.ts`

```ts
export enum TarefaStatus {
  ABERTA = "ABERTA",
  EM_ANDAMENTO = "EM_ANDAMENTO",
  FINALIZADA = "FINALIZADA",
}
```

> Esse enum define os únicos status válidos para uma tarefa.

<br/>
<hr/>
<br/>

3️⃣ Criar o tipo `Tarefa`

Você pode criar uma interface ou classe (vamos usar interface por enquanto):

📁 `src/tarefas/tarefa.model.ts`

```ts
import { TarefaStatus } from "./tarefa-status.enum";

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: TarefaStatus;
}
```

<br/>
<hr/>
<br/>

4️⃣ Atualizar o serviço para usar os tipos

Abra o arquivo `tarefas.service.ts` e modifique para usar a nova interface:

```ts
import { Injectable } from "@nestjs/common";
import { Tarefa } from "./tarefa.model";
import { TarefaStatus } from "./tarefa-status.enum";
import { CreateTarefaDto } from "./dto/create-tarefa.dto";

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [];

  getTodasTarefas(): Tarefa[] {
    return this.tarefas;
  }

  getTarefaPorId(id: number): Tarefa {
    return this.tarefas.find((t) => t.id === id);
  }

  getTarefasPorStatus(status: string): Tarefa[] {
    return this.tarefas.filter((t) => t.status === status.toUpperCase());
  }

  createTarefa(dto: CreateTarefaDto): Tarefa {
    const { titulo, descricao } = dto;

    const tarefa: Tarefa = {
      id: Date.now(), // simulando ID único
      titulo,
      descricao,
      status: TarefaStatus.ABERTA,
    };

    this.tarefas.push(tarefa);
    return tarefa;
  }
}
```

<br/>
<hr/>
<br/>

5️⃣ Atualizar o controller para receber dados via `POST`

Abra `tarefas.controller.ts` e adicione:

```ts
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TarefasService } from "./tarefas.service";
import { CreateTarefaDto } from "./dto/create-tarefa.dto";
import { Tarefa } from "./tarefa.model";

@Controller("tarefas")
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  getTodasTarefas(): Tarefa[] {
    return this.tarefasService.getTodasTarefas();
  }

  @Get(":id")
  getTarefaPorId(@Param("id") id: string): Tarefa {
    return this.tarefasService.getTarefaPorId(parseInt(id));
  }

  @Get("status/:status")
  getTarefasPorStatus(@Param("status") status: string): Tarefa[] {
    return this.tarefasService.getTarefasPorStatus(status);
  }

  @Post()
  createTarefa(@Body() createTarefaDto: CreateTarefaDto): Tarefa {
    return this.tarefasService.createTarefa(createTarefaDto);
  }
}
```

<br/>
<hr/>
<br/>

🧪 Exercício Final

1. Faça um `POST` com JSON no Postman para o endpoint:

```bash
POST http://localhost:3000/tarefas
```

```json
{
  "titulo": "Estudar DTOs",
  "descricao": "Aprender como usar DTOs no Nest.js"
}
```

<!-- markdownlint-disable MD029 -->
2. Depois acesse:

- `GET /tarefas` para ver a tarefa criada

- `GET /tarefas/ID` para ver a tarefa por ID

- `GET /tarefas/status/ABERTA` para filtrar por status

<br/>
<hr/>
<br/>

✅ O que você aprendeu hoje:

✔ O que é um DTO e por que usá-lo
✔ Como definir tipos com classes, interfaces e enums
✔ Como aplicar DTOs no fluxo de criação de tarefas
✔ Como usar `@Body()` para receber dados no Nest.js
✔ Como preparar seu código para aplicar validações reais no próximo dia

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 5º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟
