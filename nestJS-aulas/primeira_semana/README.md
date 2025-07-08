- [🗂️ Plano de Estudo – Nest.js (Semana 1)](#️-plano-de-estudo--nestjs-semana-1)<!-- markdownlint-disable MD041 -->
- [🗂️ Plano de Estudo – Nest.js (Semana 2)](#️-plano-de-estudo--nestjs-semana-2)
- [🗂️ Plano de Estudo – Nest.js (Semana 3)](#️-plano-de-estudo--nestjs-semana-3)
- [📦 Estrutura do projeto ao final da 3ª semana](#-estrutura-do-projeto-ao-final-da-3ª-semana)
- [](#)<!-- markdownlint-disable MD042 -->
- [📘 Dia 1 – Introdução ao Nest.js](#-dia-1--introdução-ao-nestjs)
  - [✅ O que é o Nest.js?](#-o-que-é-o-nestjs)
  - [✅ Por que usar Nest.js?](#-por-que-usar-nestjs)
  - [✅ Arquitetura e Injeção de Dependência](#-arquitetura-e-injeção-de-dependência)
  - [🔧 Atividades Práticas](#-atividades-práticas)
  - [🧪 Exercício Final](#-exercício-final)
- [📘 **Dia 2 – Controladores no Nest.js**](#-dia-2--controladores-no-nestjs)
  - [✅ O que são controladores?](#-o-que-são-controladores)
  - [✅ Decoradores principais](#-decoradores-principais)
  - [🔧 Atividades Práticas](#-atividades-práticas-1)
  - [🚀 Testando no navegador ou Postman](#-testando-no-navegador-ou-postman)
  - [🧪 Exercício Final](#-exercício-final-1)
  - [✅ O que você aprendeu hoje:](#-o-que-você-aprendeu-hoje)
- [📘 Dia 3 – Serviços no Nest.js](#-dia-3--serviços-no-nestjs)
  - [✅ O que são serviços no Nest.js?](#-o-que-são-serviços-no-nestjs)
  - [✅ `@Injectable()` e Injeção de Dependência](#-injectable-e-injeção-de-dependência)
  - [🔧 Atividades Práticas](#-atividades-práticas-2)
  - [🧪 Exercício Final](#-exercício-final-2)
  - [✅ O que você aprendeu hoje:](#-o-que-você-aprendeu-hoje-1)
- [📘 Dia 4 – DTOs e Tipagem no Nest.js](#-dia-4--dtos-e-tipagem-no-nestjs)
  - [✅ O que é um DTO (Data Transfer Object)?](#-o-que-é-um-dto-data-transfer-object)
  - [✅ Interfaces ou Classes para tipos](#-interfaces-ou-classes-para-tipos)
  - [✅ Validação com TypeScript](#-validação-com-typescript)
  - [🔧 Atividades Práticas](#-atividades-práticas-3)
- [📘 Dia 5 – Injeção de Dependência e Boas Práticas](#-dia-5--injeção-de-dependência-e-boas-práticas)
  - [✅ Injeção de dependência com ``constructor()``](#-injeção-de-dependência-com-constructor)
  - [✅ Boas práticas: separar DTOs, entidades, enums e módulos](#-boas-práticas-separar-dtos-entidades-enums-e-módulos)
  - [✅ Status padrão ``ABERTA`` no método ``createTarefa()``](#-status-padrão-aberta-no-método-createtarefa)
  - [🔧 Atividades Práticas](#-atividades-práticas-4)
  - [🧪 Exercício Final](#-exercício-final-3)
  - [✅ Como testar no Postman](#-como-testar-no-postman)
  - [✅ Exemplo de resposta esperada no Postman:](#-exemplo-de-resposta-esperada-no-postman)
- [📘 Dia 6 – Módulos no Nest.js](#-dia-6--módulos-no-nestjs)
  - [✅ O que são módulos no Nest.js?](#-o-que-são-módulos-no-nestjs)
  - [✅ Por que dividir em módulos?](#-por-que-dividir-em-módulos)
  - [✅ Exemplo de estrutura modular:](#-exemplo-de-estrutura-modular)
  - [🔧 Atividades Práticas](#-atividades-práticas-5)
  - [🧪 Exercício Final](#-exercício-final-4)
  - [✅ O que você aprendeu hoje:](#-o-que-você-aprendeu-hoje-2)
- [📘 Dia 7 – Revisão e Prática: Criando uma API de Tarefas](#-dia-7--revisão-e-prática-criando-uma-api-de-tarefas)
  - [🔁 Fluxo de funcionamento no Nest.js](#-fluxo-de-funcionamento-no-nestjs)
  - [🛠️ Objetivo da Aula](#️-objetivo-da-aula)
  - [🧱 **Requisitos da API**](#-requisitos-da-api)
  - [✅ Endpoints:](#-endpoints)
  - [🔧 Passo a passo da implementação](#-passo-a-passo-da-implementação)
  - [📦 Estrutura final do projeto (sem banco)](#-estrutura-final-do-projeto-sem-banco)
  - [🫣 Antes do exercício final vamos implementar a rota ``PATCH``](#-antes-do-exercício-final-vamos-implementar-a-rota-patch)
  - [✅ Rota ``PATCH /tarefas/:id/status``](#-rota-patch-tarefasidstatus)
  - [🧪 Exercício Final](#-exercício-final-5)
  - [✅ O que você aprendeu hoje:](#-o-que-você-aprendeu-hoje-3)
- [📘 Dia 8 – Pipes e Validação de Dados](#-dia-8--pipes-e-validação-de-dados)
  - [✅ O que são Pipes no Nest.js?](#-o-que-são-pipes-no-nestjs)
  - [✅ Validação com ``class-validator`` + ``class-transformer``](#-validação-com-class-validator--class-transformer)
  - [🔧 Atividades Práticas](#-atividades-práticas-6)
  - [⚠️ Se for usar a função acima no método service seria bom remover os dois metodos abaixo relacionados ao status no serviço `TarefasService`](#️-se-for-usar-a-função-acima-no-método-service-seria-bom-remover-os-dois-metodos-abaixo-relacionados-ao-status-no-serviço-tarefasservice)
  - [⚠️ Também remova o método  ``@Get('status/:status')`` e deixe tudo com o metodo que modificamos `@Get()`](#️-também-remova-o-método--getstatusstatus-e-deixe-tudo-com-o-metodo-que-modificamos-get)
  - [🧪 Exercício Final](#-exercício-final-6)
  - [✅ O que você aprendeu hoje:](#-o-que-você-aprendeu-hoje-4)

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

# 📘 Dia 5 – Injeção de Dependência e Boas Práticas

📚 Conteúdo Teórico

## ✅ Injeção de dependência com ``constructor()``

- No Nest.js, a injeção de dependência acontece automaticamente via o construtor das classes.

- Ao declarar um parâmetro no construtor com o tipo de uma classe decorada com ``@Injectable()``, o Nest resolve e fornece a instância para você.

Exemplo:

```ts
constructor(private readonly tarefasService: TarefasService) {}
```

> Isso injeta o serviço ``TarefasService`` no controller.

<br/>
<hr />
<br/>

## ✅ Boas práticas: separar DTOs, entidades, enums e módulos

Organizar o projeto em camadas bem definidas é essencial:

```cpp
src/
├── tarefas/
│   ├── dto/                     → Dados de entrada
│   ├── enums/                   → Enums (status, roles, etc.)
│   ├── tarefas.controller.ts    → Lida com requisições
│   ├── tarefas.service.ts       → Lógica de negócio
│   ├── tarefa.model.ts          → Tipo de tarefa
│   └── tarefa-status.enum.ts    → Status enum
```

> Isso ajuda a manter o projeto limpo e escalável.

<br/>
<hr />
<br/>

## ✅ Status padrão ``ABERTA`` no método ``createTarefa()``

Sempre que uma nova tarefa for criada, ela deve começar com o status ``ABERTA``, sem depender do usuário enviar esse valor.

<br/>
<hr />
<br/>

## 🔧 Atividades Práticas

1️⃣ Revisar e mover o enum para pasta organizada

Crie a pasta ``src/tarefas/enums/`` e mova o arquivo ``tarefa-status.enum.ts`` para lá:

```ts
// src/tarefas/enums/tarefa-status.enum.ts
export enum TarefaStatus {
  ABERTA = 'ABERTA',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  FINALIZADA = 'FINALIZADA',
}
```

Atualize os imports onde for necessário.

<br/>
<hr />
<br/>

2️⃣ Atualizar o método ``createTarefa()`` no serviço

Garanta que o status da tarefa criada seja sempre ``ABERTA``, mesmo que não venha do DTO:

```ts
// src/tarefas/tarefas.service.ts
import { TarefaStatus } from './enums/tarefa-status.enum';

createTarefa(dto: CreateTarefaDto): Tarefa {
  const { titulo, descricao } = dto;

  const tarefa: Tarefa = {
    id: Date.now(),
    titulo,
    descricao,
    status: TarefaStatus.ABERTA, // valor padrão
  };

  this.tarefas.push(tarefa);
  return tarefa;
}
```

<br/>
<hr />
<br/>

## 🧪 Exercício Final

Criar um método ``filtrarTarefasPorStatus(status: string)``

No ``tarefas.service.ts``:

```ts
filtrarTarefasPorStatus(status: string): Tarefa[] {
  return this.tarefas.filter(
    (tarefa) => tarefa.status === status.toUpperCase(),
  );
}
```

No ``tarefas.controller.ts``, atualize o método correspondente:

```ts
@Get('status/:status')
getTarefasPorStatus(@Param('status') status: string): Tarefa[] {
  return this.tarefasService.filtrarTarefasPorStatus(status);
}
```

<br/>
<hr />
<br/>

## ✅ Como testar no Postman

1. Certifique-se de que o servidor está rodando:

```bash
npm run start:dev
```

2. Faça uma requisição GET no Postman para:

```bash
GET http://localhost:3000/tarefas/status/ABERTA
```

Ou teste com:

- ``/tarefas/status/em_andamento``

- ``/tarefas/status/finalizada``

> Dica: como o método faz ``.toUpperCase()``, você pode enviar o status em minúsculas, maiúsculas ou misto – tudo será tratado corretamente.

## ✅ Exemplo de resposta esperada no Postman:

```bash
[
  {
    "id": 123456789,
    "titulo": "Estudar Nest.js",
    "descricao": "Aprender como funciona o framework",
    "status": "ABERTA"
  }
]
```

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 6º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 6 – Módulos no Nest.js

📚 Conteúdo Teórico

## ✅ O que são módulos no Nest.js?

- Módulos são a base da organização de qualquer aplicação Nest.js.

- Cada módulo agrupa controllers, services, providers, e outros recursos que compartilham um mesmo propósito.

- A estrutura modular permite dividir a aplicação em domínios independentes, facilitando a manutenção e escalabilidade.

> O Nest sempre começa com um ``AppModule`` (módulo raiz), e você pode criar quantos módulos precisar.

<br/>
<hr />
<br/>

## ✅ Por que dividir em módulos?

- Isolamento de responsabilidade: cada módulo trata de uma parte específica da aplicação.

- Reutilização: módulos podem ser reutilizados em outras partes ou projetos.

- Escalabilidade: facilita adicionar novos domínios e funcionalidades.

<br/>
<hr />
<br/>

## ✅ Exemplo de estrutura modular:

```cpp
src/
├── app.module.ts
├── tarefas/
│   ├── tarefas.module.ts      → Módulo de tarefas
│   ├── tarefas.controller.ts  → Controller de tarefas
│   ├── tarefas.service.ts     → Serviço de tarefas
│   ├── dto/
│   ├── enums/
│   ├── tarefa.model.ts
```

<br/>
<hr />
<br/>

## 🔧 Atividades Práticas

1️⃣ Criar módulo de tarefas (caso não tenha feito ainda)

No terminal com o caminho em ``C:\meus_projetos\aulas-nodeJS-nestJS-typeORM\nestJS-aulas\primeira_semana\projeto-tarefas\src>``:

```bash
nest g module tarefas
```

> Isso criará o arquivo ``src/tarefas/tarefas.module.ts``

<br/>
<hr />
<br/>

2️⃣ Garantir que o módulo está completo

Abra o arquivo ``tarefas.module.ts`` e verifique se está importando corretamente o controller e o service:

```ts
import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

@Module({
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
```

<br/>
<hr />
<br/>

3️⃣ Registrar o módulo no módulo raiz (``AppModule``)

Abra ``src/app.module.ts`` e adicione o módulo de tarefas no array ``imports``:

```ts
import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [TarefasModule],
})
export class AppModule {}
```

<br/>
<hr />
<br/>

## 🧪 Exercício Final

1. Pare e reinicie o servidor (``Ctrl+C`` e ``npm run start:dev``) para aplicar as alterações.

2. Confirme se as rotas de tarefas continuam funcionando normalmente:

- ``GET /tarefas``

- ``GET /tarefas/1``

- ``POST /tarefas``

3. Teste remover o ``TarefasService`` de dentro do ``AppModule`` (se ainda estiver lá) para garantir que a responsabilidade está centralizada no módulo de tarefas.

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ O que são e para que servem módulos no Nest.js
✔ Como organizar o projeto por domínio funcional usando módulos
✔ Como criar e registrar módulos customizados
✔ Como garantir o isolamento de responsabilidade de cada parte da aplicação

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 7º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 7 – Revisão e Prática: Criando uma API de Tarefas

📚 Revisão de Conceitos

## 🔁 Fluxo de funcionamento no Nest.js

1. **Controller**: recebe a requisição HTTP (GET, POST, etc.)

2. **Service**: contém a lógica de negócio

3. **DTOs** e **Enums**: definem estrutura e regras dos dados

4. **Resposta**: volta para o controller e é enviada para o cliente

<br/>
<hr />
<br/>

## 🛠️ Objetivo da Aula

Criar um mini projeto Nest.js de uma API de tarefas, com armazenamento em memória e rotas completas para manipular as tarefas.

Sem banco de dados por enquanto – o foco é praticar controllers, services, DTOs, módulos, enums e boas práticas.

<br/>
<hr />
<br/>

## 🧱 **Requisitos da API**

## ✅ Endpoints:

| Método | Rota                  | Ação                         |
| ------ | --------------------- | ---------------------------- |
| GET    | `/tarefas`            | Listar todas as tarefas      |
| GET    | `/tarefas/:id`        | Obter uma tarefa pelo ID     |
| POST   | `/tarefas`            | Criar uma nova tarefa        |
| DELETE | `/tarefas/:id`        | Remover uma tarefa           |
| PATCH  | `/tarefas/:id/status` | Atualizar o status da tarefa |

<br/>
<hr />
<br/>

## 🔧 Passo a passo da implementação

1️⃣ Criar a estrutura do módulo de tarefas

Caso ainda não tenha criado:

```bash
nest g module tarefas
nest g controller tarefas
nest g service tarefas
```

<br/>
<hr />
<br/>

2️⃣ Criar ``TarefaStatus`` enum

📁 ``src/tarefas/enums/tarefa-status.enum.ts``

```ts
export enum TarefaStatus {
  ABERTA = 'ABERTA',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  FINALIZADA = 'FINALIZADA',
}
```

<br/>
<hr />
<br/>

3️⃣ Criar a interface ``Tarefa``

📁 ``src/tarefas/tarefa.model.ts``

```ts
import { TarefaStatus } from './enums/tarefa-status.enum';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: TarefaStatus;
}
```

<br/>
<hr />
<br/>

4️⃣ Criar DTO de criação de tarefa

📁 ``src/tarefas/dto/create-tarefa.dto.ts``

```ts
export class CreateTarefaDto {
  titulo: string;
  descricao: string;
}
```

<br/>
<hr />
<br/>

5️⃣ Criar o ``TarefasService``

📁 ``src/tarefas/tarefas.service.ts``

```ts
import { Injectable } from '@nestjs/common';
import { Tarefa } from './tarefa.model';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { TarefaStatus } from './enums/tarefa-status.enum';

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [];

  getTodas(): Tarefa[] {
    return this.tarefas;
  }

  getPorId(id: number): Tarefa {
    return this.tarefas.find(t => t.id === id);
  }

  criar(dto: CreateTarefaDto): Tarefa {
    const tarefa: Tarefa = {
      id: Date.now(), // gera ID único com timestamp
      titulo: dto.titulo,
      descricao: dto.descricao,
      status: TarefaStatus.ABERTA,
    };
    this.tarefas.push(tarefa);
    return tarefa;
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  atualizarStatus(id: number, status: TarefaStatus): Tarefa {
    const tarefa = this.getPorId(id);
    tarefa.status = status;
    return tarefa;
  }
}
```

<br/>
<hr />
<br/>

6️⃣ Criar o ``TarefasController``

📁 ``src/tarefas/tarefas.controller.ts``

```ts
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { Tarefa } from './tarefa.model';
import { TarefaStatus } from './enums/tarefa-status.enum';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  getTodas(): Tarefa[] {
    return this.tarefasService.getTodas();
  }

  @Get(':id')
  getPorId(@Param('id') id: string): Tarefa {
    return this.tarefasService.getPorId(Number(id));
  }

  @Post()
  criar(@Body() dto: CreateTarefaDto): Tarefa {
    return this.tarefasService.criar(dto);
  }

  @Delete(':id')
  remover(@Param('id') id: string): void {
    this.tarefasService.remover(Number(id));
  }

  @Patch(':id/status')
  atualizarStatus(
    @Param('id') id: string,
    @Body('status') status: TarefaStatus,
  ): Tarefa {
    return this.tarefasService.atualizarStatus(Number(id), status);
  }
}
```

<br/>
<hr />
<br/>

## 📦 Estrutura final do projeto (sem banco)

```bash
src/
├── tarefas/
│   ├── dto/
│   │   └── create-tarefa.dto.ts
│   ├── enums/
│   │   └── tarefa-status.enum.ts
│   ├── tarefa.model.ts
│   ├── tarefas.controller.ts
│   ├── tarefas.service.ts
│   └── tarefas.module.ts
├── app.module.ts
└── main.ts
```

## 🫣 Antes do exercício final vamos implementar a rota ``PATCH``

## ✅ Rota ``PATCH /tarefas/:id/status``

Essa rota atualiza o ``status`` de uma tarefa específica.

<br/>
<hr />
<br/>

1️⃣ Atualizar o ``TarefasService``

Adicione o método ``atualizarStatus()``:

```ts
// tarefas.service.ts
import { TarefaStatus } from './enums/tarefa-status.enum';

atualizarStatus(id: number, novoStatus: TarefaStatus): Tarefa {
  const tarefa = this.getPorId(id);
  tarefa.status = novoStatus;
  return tarefa;
}
```

<br/>
<hr />
<br/>

2️⃣ Atualizar o ``TarefasController``

Adicione a rota ``PATCH``:

```ts
// tarefas.controller.ts
import { Patch, Body } from '@nestjs/common';
import { TarefaStatus } from './enums/tarefa-status.enum';

@Patch(':id/status')
atualizarStatus(
  @Param('id') id: string,
  @Body('status') status: TarefaStatus,
): Tarefa {
  return this.tarefasService.atualizarStatus(Number(id), status);
}
```

<br/>
<hr />
<br/>

3️⃣ Testar no Postman

Requisição:

```bash
PATCH http://localhost:3000/tarefas/123456789/status
```

Corpo JSON:

```json
{
  "status": "FINALIZADA"
}
```

✅ Resposta esperada:

```json
{
  "id": 123456789,
  "titulo": "Estudar para a prova",
  "descricao": "Focar nos exercícios de Nest.js",
  "status": "FINALIZADA"
}
```

<br/>
<hr />
<br/>

## 🧪 Exercício Final

1. Testar os endpoints no Postman:

- ``POST /tarefas`` com:

```json
{
  "titulo": "Estudar para a prova",
  "descricao": "Focar nos exercícios de Nest.js"
}
```

- ``GET /tarefas``

- ``GET /tarefas/:id``

- ``PATCH /tarefas/:id/status`` com:

```json
{ "status": "EM_ANDAMENTO" }
```

- ``DELETE /tarefas/:id``

2. Tentar criar múltiplas tarefas e alternar status.

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ Como juntar tudo que aprendeu na semana em um mini projeto
✔ Como aplicar DTOs, enums, services e controllers de forma prática
✔ Como criar uma API REST funcional sem banco de dados
✔ Como estruturar corretamente as pastas e arquivos do projeto

<br/>
<hr />
<br/>
<p align="center">========== // ==========</p>

<h2 align="center">🚀🚀🚀🚀🚀 Início da 2ª semana e do 8º dia de aula 🚀🚀🚀🚀🚀</h2>

<p align="center">========== // ==========</p>
<br/>
<hr />
<br/>

# 📘 Dia 8 – Pipes e Validação de Dados

📚 Conteúdo Teórico

## ✅ O que são Pipes no Nest.js?

- Pipes são classes responsáveis por:

  - Transformar dados de entrada (ex: converter tipos)

  - Validar dados antes que cheguem ao controller

- Funcionam junto com os decoradores ``@Body()``, ``@Param()``, ``@Query()``, etc.

> No caso de DTOs, os pipes funcionam junto com bibliotecas como ``class-validator`` e ``class-transformer``.

<br/>
<hr />
<br/>

## ✅ Validação com ``class-validator`` + ``class-transformer``

- class-validator: fornece decorators como ``@IsString()``, ``@IsNotEmpty()``, ``@IsEnum()``, etc.

- class-transformer: converte os dados de entrada em instâncias da classe DTO (necessário para que a validação funcione)

<br/>
<hr />
<br/>

## 🔧 Atividades Práticas

1️⃣ Instalar os pacotes

```bash
npm install class-validator class-transformer
```

<br/>
<hr />
<br/>

2️⃣ Habilitar o pipe global de validação

No ``main.ts``, adicione o ``ValidationPipe`` global:

```ts
// src/main.ts
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

<br/>
<hr />
<br/>

3️⃣ Atualizar o DTO de criação de tarefa

📁 ``src/tarefas/dto/create-tarefa.dto.ts``

```ts
import { IsNotEmpty } from 'class-validator';

export class CreateTarefaDto {
  @IsNotEmpty({ message: 'O título não pode estar vazio.' })
  titulo: string;

  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  descricao: string;
}
```

> Agora, se o cliente enviar ``POST /tarefas`` com campos vazios, ele receberá uma mensagem de erro automaticamente.

<br/>
<hr />
<br/>

4️⃣ Criar o ``FilterTarefasDto`` com validação

📁 ``src/tarefas/dto/filter-tarefas.dto.ts``

```ts
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TarefaStatus } from '../enums/tarefa-status.enum';

export class FilterTarefasDto {
  @IsOptional()
  @IsEnum(TarefaStatus, {
    message: 'Status inválido. Use ABERTA, EM_ANDAMENTO ou FINALIZADA',
  })
  status?: TarefaStatus;

  @IsOptional()
  @IsString()
  termo?: string;
}
```

> Esse DTO poderá ser usado para filtros com query params, como:

```bash
GET /tarefas?status=ABERTA&termo=estudar
```

<br/>
<hr />
<br/>

5️⃣ Atualizar o controller (para preparar uso do filtro)

📁 ``src/tarefas/tarefas.controller.ts``

```ts
import { Query } from '@nestjs/common';
import { FilterTarefasDto } from './dto/filter-tarefas.dto';

@Get()
getTarefas(@Query() filtroDto: FilterTarefasDto): Tarefa[] {
  if (Object.keys(filtroDto).length) {
    return this.tarefasService.filtrarTarefas(filtroDto);
  }
  return this.tarefasService.getTodasTarefas();
}
```

(Opcional) Método no service:

```ts
filtrarTarefas(filtroDto: FilterTarefasDto): Tarefa[] {
  const { status, termo } = filtroDto;
  let tarefasFiltradas = this.tarefas;

  if (status) {
    tarefasFiltradas = tarefasFiltradas.filter(t => t.status === status);
  }

  if (termo) {
    tarefasFiltradas = tarefasFiltradas.filter(
      t => t.titulo.includes(termo) || t.descricao.includes(termo),
    );
  }

  return tarefasFiltradas;
}
```

<br/>
<hr />
<br/>

<h2>⚠️ Se for usar a função acima no método service seria bom remover os dois metodos abaixo relacionados ao status no serviço `TarefasService`</h2>

```ts
getTarefasPorStatus(status: string): Tarefa[]
filtrarTarefasPorStatus(status: string): Tarefa[]
```

<h2>⚠️ Também remova o método  ``@Get('status/:status')`` e deixe tudo com o metodo que modificamos `@Get()`</h2>

```ts
// GET /tarefas/status/:status
  @Get('status/:status')
  getTarefasPorStatus(@Param('status') status: string): Tarefa[] {
    return this.tarefasService.filtrarTarefasPor status(status);
  }
```

<br/>
<hr />
<br/>

## 🧪 Exercício Final

1. Testar ``POST /tarefas`` com campos vazios:

```json
{
  "titulo": "",
  "descricao": ""
}
```

✔️ Esperado: erro 400 com mensagens personalizadas.

2. Testar ``GET /tarefas?status=INVALIDO``

✔️ Esperado: erro 400 com mensagem de status inválido.

3. Testar ``GET /tarefas?status=EM_ANDAMENTO&termo=prova``

✔️ Esperado: retorno filtrado por status e termo no título/descrição.

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ O que são e para que servem pipes no Nest.js
✔ Como validar dados com ``class-validator`` e ``class-transformer``
✔ Como criar DTOs com validação automática
✔ Como usar ``@Query()`` com validação para filtros avançados
✔ Como aplicar boas mensagens de erro para entrada de dados inválidos

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 9º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 9 – Pipes Customizados

<br/>
<hr />
<br/>

## 📚 Conteúdo Teórico

### ✅ O que são Pipes Customizados?

Pipes customizados são classes que você cria para realizar **validação ou transformação personalizada** dos dados antes que eles sejam processados por controllers.

Eles são muito úteis para:
- Validar enums (como status)
- Transformar strings em tipos específicos
- Aplicar regras de negócio em parâmetros de rota, query ou body

<br/>
<hr />
<br/>

## 🎯 Objetivo do Dia

Criar um **pipe de validação de status de tarefa** que:
- Aceita apenas valores válidos definidos no enum `TarefaStatus`
- Rejeita valores inválidos com uma exceção amigável (`BadRequestException`)

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ Como criar pipes customizados  
✔ Como usar pipe para validar parâmetros (`@Body`, `@Param`)  
✔ Como evitar códigos duplicados de validação  
✔ Como lançar exceções personalizadas usando `BadRequestException`

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 10º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 10 – Exception Filters (Tratamento de Erros)

<br/>
<hr />
<br/>

## 📚 Conteúdo Teórico

### ✅ O que são Exception Filters no Nest.js?

Exception Filters são mecanismos do Nest.js para **tratar erros de forma centralizada e elegante**.

Você pode:
- Usar exceções pré-definidas como `NotFoundException`, `BadRequestException`, etc.
- Criar filtros globais customizados para lidar com erros de forma padronizada.

<br/>
<hr />
<br/>

### ✅ Exceções mais comuns no Nest.js

| Classe de Erro         | Código HTTP | Quando usar                            |
|------------------------|-------------|----------------------------------------|
| `NotFoundException`    | 404         | Quando algo não é encontrado           |
| `BadRequestException`  | 400         | Dados inválidos enviados pelo cliente  |
| `UnauthorizedException`| 401         | Acesso não autorizado                  |
| `ForbiddenException`   | 403         | Acesso proibido                        |

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

### 2️⃣ Repetir para `deleteTarefa` (caso exista)

Exemplo:
```ts
deleteTarefa(id: number): void {
  const tarefa = this.getTarefaPorId(id);
  this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
}
```

Se o `getTarefaPorId` já lança exceção, o método `deleteTarefa()` herdará esse comportamento.

<br/>
<hr />
<br/>

### 3️⃣ Repetir para `atualizarStatus`

📄 `tarefas.service.ts`

```ts
atualizarStatus(id: number, novoStatus: TarefaStatus): Tarefa {
  const tarefa = this.getTarefaPorId(id); // já valida
  tarefa.status = novoStatus;
  return tarefa;
}
```

<br/>
<hr />
<br/>

## 🧪 Exercício Final

1. ✅ Garantir que `GET /tarefas/:id` lança `404` se a tarefa não existir
2. ✅ Garantir que `DELETE /tarefas/:id` lança `404` se não for encontrada
3. ✅ Garantir que `PATCH /tarefas/:id/status` lança `404` se o ID for inválido

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ Como lançar exceções com `NotFoundException`  
✔ Como substituir `throw new Error(...)` por exceções do Nest.js  
✔ Como garantir respostas HTTP padronizadas em caso de erro  
✔ Como melhorar a clareza e segurança da sua API com tratamento de erros

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 11º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 11 – Middleware

<br/>
<hr />
<br/>

## 📚 Conteúdo Teórico

### ✅ O que é Middleware no Nest.js?

Middlewares são funções executadas **antes que o request chegue ao controller**. Eles são úteis para:

- Registrar logs
- Verificar autenticação
- Manipular/transformar dados do request

<br/>
<hr />
<br/>

### 🔁 Diferenças entre Middleware, Guards e Interceptors

| Conceito     | Executa em...       | Finalidade principal                   |
|--------------|---------------------|----------------------------------------|
| Middleware   | Antes do controller | Pré-processamento, logging             |
| Guard        | Antes do controller | Controle de acesso (autorização)       |
| Interceptor  | Antes e depois      | Modificar request/response, métricas   |

<br/>
<hr />
<br/>

## 🔧 Atividades Práticas

### 1️⃣ Gerar middleware

```bash
nest g middleware logger
```

Cria o arquivo: `src/logger.middleware.ts`

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

## 🧪 Exercício

✔ Adicione um log personalizado com:

- Timestamp (`new Date().toISOString()`)
- Método HTTP (`GET`, `POST`, etc.)
- URL acessada (`originalUrl`)

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ O que são e para que servem os middlewares  
✔ Como criar middlewares com o Nest CLI  
✔ Como aplicar middlewares globalmente ou em rotas específicas  
✔ Como registrar logs com timestamp e rota acessada

<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 12º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>

# 📘 Dia 12 – Guards (Autenticação Básica)

<br/>
<hr />
<br/>

## 📚 Conteúdo Teórico

### ✅ O que são Guards no Nest.js?

Guards são mecanismos de segurança que **controlam se uma requisição pode continuar** até o controller ou não.

Eles são muito usados para:
- Verificar autenticação (JWT, tokens, etc)
- Checar permissões (roles)
- Restringir acesso por lógica personalizada

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

## 🔧 Atividades Práticas

### 1️⃣ Criar um Guard chamado `AuthGuard`

```bash
nest g guard auth
```

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

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

<br/>
<hr />
<br/>

## 🧪 Exercício

✔ Aplique o guard apenas no método `POST /tarefas`  
✔ Teste com o Postman ou Insomnia:

- Enviar sem header `authorization`: ❌ recebe erro 401
- Enviar com `authorization: meutoken123`: ✅ tarefa criada com sucesso

<br/>
<hr />
<br/>

## ✅ O que você aprendeu hoje:

✔ Como criar guards no Nest.js  
✔ Como interceptar requisições antes do controller  
✔ Como fazer uma autenticação simples com token hardcoded  
✔ Como proteger rotas usando `@UseGuards()`













<br/>
<hr />
<br/>
<p align="center">============================== // ==============================</p>

<p align="center">🚀🚀🚀🚀🚀 Início do 6º dia de aula 🚀🚀🚀🚀🚀</p>

<p align="center">============================== // ==============================</p>
<br/>
<hr />
<br/>


1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟
