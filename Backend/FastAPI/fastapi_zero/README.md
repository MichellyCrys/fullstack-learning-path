# 🚀 FastAPI do Zero

![Python Version](https://img.shields.io/badge/python-3.13%2B-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115%2B-05998b?logo=fastapi)
![Security](https://img.shields.io/badge/Security-JWT%20%26%20Refresh%20Token-red)
![Poetry](https://img.shields.io/badge/Packaging-Poetry-blue?logo=poetry)
![Ruff](https://img.shields.io/badge/Linter-Ruff-orange)
![Asynchronous](https://img.shields.io/badge/AsyncIO-Supported-blueviolet)
![SQLAlchemy](https://img.shields.io/badge/ORM-SQLAlchemy%20Async-red)
![Tests](https://img.shields.io/badge/Tests-FactoryBoy%20%26%20FreezeGun-yellow?logo=pytest)
![TDD](https://img.shields.io/badge/Tests-Pytest-yellow?logo=pytest)

---

## 📌 Overview

**FastAPI Zero** é uma API RESTful moderna, assíncrona e segura, projetada com foco em:

- Arquitetura modular e desacoplada  
- Segurança baseada em JWT com Refresh Token  
- Persistência assíncrona com SQLAlchemy 2.0  
- Testes automatizados com alta cobertura  
- Boas práticas de engenharia (12-Factor App)  

O projeto foi desenvolvido como parte da minha trilha de especialização em backend dentro do repositório `fullstack-learning-path`, com objetivo de simular padrões utilizados em ambientes de produção.

---

## 🏗 Arquitetura do Sistema

A aplicação segue uma arquitetura modular orientada a domínio, separando responsabilidades de forma clara:

```bash
fastapi_zero/
│
├── fastapi_zero/
│   ├── routers/         # Camada de apresentação (routers)
│   ├── app.py
│   ├── database.py
│   ├── models.py      # Modelos ORM (SQLAlchemy)
│   ├── schemas.py     # DTOs e validação (Pydantic v2)
│   ├── security.py         
│   └── settings.py 
│
├── tests/           # Testes automatizados
└── migrations/         # Controle de migrações
```

### Princípios aplicados

- Separação de responsabilidades  
- Injeção de dependências com `Annotated`  
- Configuração via variáveis de ambiente  
- Código orientado a testes  
- Arquitetura preparada para escalabilidade horizontal  

---

## ⚡ Arquitetura Assíncrona

A API é **totalmente não bloqueante**, permitindo melhor escalabilidade sob concorrência.

- `async def` em todos os endpoints  
- `AsyncSession` (SQLAlchemy 2.0)  
- Driver `aiosqlite`  
- `pytest-asyncio` para testes assíncronos  
- Ajustes no Alembic para engine async  

Essa abordagem elimina bloqueios de I/O durante operações de banco de dados.

---

## 🔐 Segurança

A autenticação é baseada no padrão **JWT (RFC 7519)** com estratégia moderna de renovação de sessão.

### Implementado

- Access Token com curta duração  
- Refresh Token para renovação segura  
- Hash de senha com **Argon2**  
- Autorização baseada em dono do recurso (Owner-only)  
- Tratamento explícito de:
  - Token expirado  
  - Token inválido  
  - Acesso não autorizado (401)  
  - Acesso proibido (403)  

### Decisões técnicas

- **Argon2** → algoritmo moderno resistente a ataques de força bruta  
- **JWT Stateless** → escalabilidade horizontal sem armazenamento de sessão  
- **Refresh Token** → melhor experiência do usuário sem comprometer segurança  

---

## 🗄 Modelagem de Dados
Relacionamento principal:

```bash
User (1) —— (N) Todo
```
---

### Características

- Relação 1:N com `delete-orphan`  
- Cascade delete configurado  
- Enum tipado para estados (`draft`, `todo`, `doing`, `done`, `trash`)  
- Paginação via `limit` e `offset`  
- Filtros dinâmicos com `.contains()`  
- Patch parcial com `model_dump(exclude_unset=True)`  

---

## 🧪 Estratégia de Testes

A aplicação possui suíte de testes cobrindo:

- Fluxos principais (happy path)  
- Casos adversos (edge cases)  
- Conflitos de dados (409)  
- Autorização indevida (403)  
- Expiração de token (simulada com `freezegun`)  
- Tokens inválidos ou manipulados  

### Ferramentas

- Pytest  
- Pytest-asyncio  
- Factory Boy  
- Freezegun  
- Coverage  

### Abordagem

- Uso de factories para isolamento de dados  
- Fixtures assíncronas  
- Testes desacoplados da implementação interna  
- Geração automática de relatório HTML de cobertura  

---

## 🛠 Stack Tecnológica

### Core

* Python 3.13+
* FastAPI
* Pydantic v2

### Banco de Dados

* SQLAlchemy 2.0 (Async)
* Alembic

### Segurança

* PyJWT
* pwdlib (Argon2)

### Dev Experience

* Poetry
* Ruff
* Taskipy
* Pytest
* Factory Boy

---

## ⚙️ Setup do Ambiente

### 1️⃣ Instalar dependências

```bash
poetry install
```

### 2️⃣ Criar arquivo `.env`

Baseie-se no `.env.example`.

### 3️⃣ Ativar ambiente

```bash
poetry shell
```

### 4️⃣ Rodar migrações

```bash
alembic upgrade head
```

### 5️⃣ Iniciar servidor

```bash
task run
```

---

## 🧪 Executar Testes

```bash
task test
```

| Comando       | Descrição                  |
| ------------- | -------------------------- |
| `task lint`   | Análise estática do código |
| `task format` | Formatação automática      |
| `task run`    | Executa a API              |
| `task test`   | Executa testes + coverage  |

---

## 🐳 Containerização e PostgreSQL

A aplicação foi containerizada utilizando Docker, permitindo:

- Ambiente reproduzível
- Isolamento de dependências
- Facilidade de deploy
- Padronização entre desenvolvimento e produção

Além disso, migramos do SQLite para **PostgreSQL**, tornando a aplicação mais adequada para ambientes reais.

---

## 📦 Dockerfile

A aplicação possui um `Dockerfile` responsável por:

- Definir a imagem base Python
- Instalar dependências via Poetry
- Copiar o código da aplicação
- Configurar variáveis de ambiente
- Expor a porta da API
- Definir o comando de inicialização

Isso garante que qualquer ambiente consiga executar a aplicação com apenas:

```bash
docker build -t fastapi-zero .
docker run -p 8000:8000 fastapi-zero
```

---

## 🐘 PostgreSQL

A aplicação agora utiliza **PostgreSQL** como banco principal.

### Motivos da migração:

* Melhor suporte a concorrência
* Confiabilidade em produção
* Suporte avançado a índices e queries complexas
* Compatibilidade com ambientes cloud

A configuração é feita via variáveis de ambiente:

```env
DATABASE_URL=postgresql+asyncpg://user:password@db:5432/database
```

---

## 🧩 Docker Compose

Para simplificar o gerenciamento de múltiplos containers (API + Banco), foi criado um `compose.yaml`.

Ele orquestra:

* Container da API
* Container do PostgreSQL
* Rede interna entre serviços
* Volume para persistência de dados

### Subir ambiente completo:

```bash
docker compose up --build
```

---

## 💾 Persistência de Dados

Utilização de **volumes Docker** para garantir:

* Persistência entre reinicializações
* Isolamento de dados
* Ambiente consistente

---

## 🔄 Migrações Automatizadas

As migrações do Alembic são executadas automaticamente na inicialização do container, garantindo que o banco esteja sempre sincronizado com o modelo de dados.

```bash
alembic upgrade head
```

---

## 🧪 Testes com Containers

O projeto também suporta execução de testes utilizando banco de dados isolado em container.

### Estratégia adotada:

* Container dedicado para testes
* Engine assíncrona separada
* Fixtures específicas para sessão e engine
* Banco descartável por execução

Isso garante:

* Isolamento total dos testes
* Reprodutibilidade
* Independência do ambiente local

---

## 🧭 Roadmap

- [x] CRUD completo  
- [x] Autenticação JWT  
- [x] Refresh Token  
- [x] Assincronismo completo  
- [x] Testes automatizados  
- [x] Docker  
- [x] PostgreSQL  
- [x] Docker Compose  
- [ ] CI/CD (GitHub Actions)  
- [ ] Deploy em ambiente cloud  
- [ ] Observabilidade (logs estruturados)

---

## 💡 Decisões Arquiteturais

* Uso de SQLAlchemy Async para evitar blocking I/O
* Separação entre camada HTTP e lógica de negócio
* Configuração baseada em ambiente (12-Factor App)
* Sistema stateless para facilitar deploy em múltiplas instâncias
* Uso de factories para evitar dependência entre testes

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como parte da minha evolução técnica em backend, com foco em:

* Projetar APIs escaláveis
* Aplicar boas práticas modernas
* Trabalhar com autenticação robusta
* Implementar arquitetura orientada a produção
* Desenvolver código testável e sustentável

---

# 🔥 Resultado

FastAPI Zero não é apenas um CRUD —
é uma API estruturada com padrões de engenharia aplicáveis em ambientes reais.

---


