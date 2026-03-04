# 🚀 FastAPI do Zero

![Python](https://img.shields.io/badge/python-3.13%2B-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-async-05998b?logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/database-postgresql-316192?logo=postgresql)
![Docker](https://img.shields.io/badge/container-docker-2496ed?logo=docker)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions)
![Tests](https://img.shields.io/badge/tests-pytest-yellow?logo=pytest)
![Status](https://img.shields.io/badge/status-production--ready-brightgreen)

API REST assíncrona desenvolvida com **FastAPI**, projetada com foco em arquitetura limpa, segurança robusta, testes automatizados e deploy em ambiente real.

Este projeto representa um backend completo pronto para produção.

---

# 🎯 Objetivo

Construir uma API moderna aplicando práticas reais de engenharia de software:

* Arquitetura modular
* Assincronismo completo
* Autenticação JWT com Refresh Token
* Testes automatizados
* CI/CD
* Containerização
* Banco relacional em produção

---

# 🏗 Arquitetura

Estrutura modular orientada a domínio:

```
fastapi_zero/
│
├── fastapi_zero/
│   ├── routers/
│   ├── app.py
│   ├── database.py
│   ├── models.py 
│   ├── schemas.py
│   ├── security.py
│   └── settings.py
│
├── migrations/
├── tests/
├── compose.yaml
├── Dockerfile
├── entrypoint.sh
└── pyproject.toml
```

## Princípios Aplicados

* Separação de responsabilidades
* Injeção de dependência com `Annotated`
* Configuração via variáveis de ambiente
* Arquitetura stateless
* Preparado para escalabilidade horizontal

---

# ⚡ Assincronismo

* `async def` em todos endpoints
* `AsyncSession` (SQLAlchemy 2.0)
* Driver `asyncpg`
* Testes com `pytest-asyncio`

Resultado: I/O não bloqueante e melhor desempenho sob concorrência.

---

# 🔐 Segurança

Autenticação baseada em JWT (RFC 7519).

## Implementado

* Access Token (curta duração)
* Refresh Token
* Hash com Argon2
* Proteção owner-only
* Tratamento de 401 e 403

## Decisões Técnicas

* JWT stateless para escalabilidade
* Refresh Token para melhor UX
* Hash moderno resistente a brute force

---

# 🗄 Banco de Dados

Banco principal: **PostgreSQL**

Relacionamento:

```
User (1) ---- (N) Todo
```

Características:

* Cascade delete
* delete-orphan
* Enum tipado
* Paginação com limit/offset
* Filtros dinâmicos
* Patch parcial seguro

---

# 🧪 Testes Automatizados

Cobertura ampla incluindo:

* Happy path
* Edge cases
* Token expirado (Freezegun)
* Conflitos 409
* Acesso indevido 403

Ferramentas:

* Pytest
* Factory Boy
* Freezegun
* Coverage

Estratégia:

* Factories isoladas
* Banco descartável
* Testes desacoplados da implementação

---

# 🔁 Integração Contínua

Pipeline automatizado com **GitHub Actions**.

A cada push:

* Instala dependências
* Executa lint
* Roda testes
* Gera coverage
* Falha se qualquer etapa quebrar

---

# 🐳 Containerização

A aplicação é totalmente containerizada com **Docker**.

## Build manual

```bash
docker build -t fastapi-zero .
docker run -p 8000:8000 fastapi-zero
```

---

# 🧩 Docker Compose

Orquestra:

* API
* PostgreSQL
* Rede interna
* Volume persistente

Executar ambiente completo:

```bash
docker compose up --build
```

---

# 🚀 Deploy em Produção

Deploy realizado na plataforma **Fly.io**.

## Estratégia

* Build via Docker
* Banco gerenciado Fly Postgres
* Variáveis via secrets
* Migrações automáticas

---

# 🔄 Migrações

Controle via Alembic:

```bash
alembic upgrade head
```

Executado automaticamente no container de produção.

---

# ⚙️ Setup Local

### Instalar dependências

```bash
poetry install
```

### Criar `.env`

Baseado em `.env.example`

### Rodar migrações

```bash
alembic upgrade head
```

### Executar API

```bash
task run
```

---

# 🧪 Executar Testes

```bash
task test
```

---

# 🧭 Roadmap Concluído

* [x] CRUD completo
* [x] Autenticação JWT
* [x] Refresh Token
* [x] Assincronismo total
* [x] Testes automatizados
* [x] Coverage
* [x] Docker
* [x] PostgreSQL
* [x] Docker Compose
* [x] CI
* [x] Deploy real

---

# 🧠 Decisões Arquiteturais

* SQLAlchemy Async para evitar blocking I/O
* Stateless auth
* Configuração baseada em ambiente
* Separação clara entre HTTP e domínio
* Testes como primeiro cidadão

---

# 📈 Papel no Ecossistema

Este projeto é o backend âncora do repositório fullstack-learning-path.

Ele demonstra:

* Engenharia backend moderna
* Arquitetura escalável
* Segurança robusta
* Pipeline automatizado
* Deploy real em nuvem

---

# 🔥 Resultado

FastAPI Zero não é apenas um CRUD.

É uma API production-ready com arquitetura profissional, testes automatizados e deploy contínuo.

---