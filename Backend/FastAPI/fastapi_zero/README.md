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

Este projeto está sendo desenvolvido durante o curso **FastAPI do Zero (Edição 2025)**, ministrado pelo Dunossauro. O foco principal é aprender a construir APIs robustas, testáveis e performáticas seguindo as melhores práticas do mercado.

---

## 🛠️ Tecnologias e Ferramentas (Stack 2025)

* **Core:** Python 3.13+, FastAPI (Async), Pydantic v2.
* **Banco de Dados:** SQLAlchemy (Async), Alembic, **Relacionamentos 1:N**.
* **Segurança:** Autenticação JWT e Autorização de Nível de Registro (Owner-only).
* **Testes:** Pytest, Factory-boy (FuzzyChoice/Sequence), Freezegun.
* **Arquitetura:** APIRouter, **Clean Code**, Pydantic-Settings.

---

## 📈 Progresso do Aprendizado

- [x] **Aula 01:** Configuração de ambiente e "Hello World" com testes automatizados.
- [x] **Aula 02:** Fundamentos do desenvolvimento web e funcionamento do FastAPI.
- [x] **Aula 03:** Implementação completa das operações **CRUD** básicas.
- [x] **Aula 04:** Integração com **Banco de Dados (SQLAlchemy)** e gerenciamento de **Migrações (Alembic)**.
- [x] **Aula 05:** Integração do **SQLAlchemy** e Testes com **Fixtures**.
- [x] **Aula 06:** Autenticação e Autorização com tokens JWT
- [x] **Aula 07:** **Refatoração, Routers e Annotated.**
- [x] **Aula 08:** **Programação Assíncrona com AsyncIO e SQLAlchemy.**
- [x] **Aula 09:** **Tornando o sistema de autenticação robusto.**
- [x] **Aula 10:** **Relacionamentos (1:N) e CRUD de Tarefas (Todos).**
- [ ] **Aula 11:** Próximo passo: Dockerizando a aplicação e PostgreSQL.

---

## 🛠️ Evolução Técnica e Segurança

Nesta etapa (Aulas 05 e 06), a aplicação deixou de ser um protótipo em memória para se tornar uma API persistente e segura, seguindo padrões de nível de produção.

### 🗄️ Aula 05: Persistência Real
* **Integração SQLAlchemy:** Migração total do CRUD para utilizar o ORM SQLAlchemy, permitindo a persistência real dos dados.
* **Injeção de Dependência:** Uso do `Depends` do FastAPI para gerenciar sessões do banco de dados de forma eficiente e limpa.
* **Fixtures Avançadas:** Implementação de fixtures no Pytest para automatizar a criação de cenários de teste (usuários, banco limpo), garantindo testes rápidos e isolados.
* **Tratamento de Exceções:** Implementação de lógica para tratar conflitos de dados (ex: e-mails duplicados) com o Status Code 409.

### 🔐 Aula 06: Autenticação e Autorização
* **Segurança de Senhas:** Implementação de hashing seguro com o algoritmo **Argon2** (via `pwdlib`), eliminando o armazenamento de senhas em texto puro.
* **Tokens JWT (JSON Web Token):** Criação de um sistema de tokens de acesso (RFC 7519) com tempo de expiração e assinatura digital.
* **Fluxo de Login:** Desenvolvimento do endpoint `/token` para autenticação de credenciais.
* **Proteção de Endpoints:** Implementação de lógica de autorização onde usuários autenticados só podem modificar ou deletar os seus próprios dados.
* **Testes de Segurança:** Cobertura de testes específica para validar tokens inválidos, expirados e restrições de acesso a recursos.

### 🏗️ Refatoração e Arquitetura (Aula 07)
* **Modularização (Routers):** Divisão da lógica em múltiplos ficheiros (`users.py`, `auth.py`) para facilitar a manutenção.
* **12-Factor App:** Migração de constantes sensíveis para variáveis de ambiente (`.env`) usando a classe `Settings`.
* **Annotated:** Adoção do padrão `Annotated` para injeção de dependências, seguindo as recomendações mais recentes do FastAPI.

### ⚡ Aula 08: O Poder do Asincronismo
Nesta etapa, transformamos a aplicação em uma API **não bloqueante**:

* **SQLAlchemy Assíncrono:** Migração da Engine e das Sessões para `AsyncSession`, utilizando o driver `aiosqlite` para operações de I/O não bloqueantes.
* **Endpoints `async def`:** Todos os controladores foram convertidos para corrotinas, permitindo que o loop de eventos processe outras tarefas enquanto aguarda o banco de dados.
* **Infraestrutura de Testes:** Integração do `pytest-asyncio` e reformulação das fixtures para suportar contextos assíncronos (`AsyncClient` e `AsyncSession`).
* **Migrações Assíncronas:** Ajuste no `env.py` do Alembic para suportar a nova engine de conexão assíncrona.
* **Cobertura de Código:** Configuração do Coverage para lidar com concorrência (`greenlet`), garantindo métricas reais de teste.

## 🛡️ Evolução Técnica: Autenticação Robusta (Aula 09)

Nesta etapa, elevamos a segurança da aplicação para um nível de produção, focando em **resiliência e experiência do usuário**:

### 🔄 Implementação de Refresh Token
Para melhorar a UX, criamos o endpoint `/refresh_token`. Isso permite que o usuário renove seu acesso sem precisar reenviar as credenciais (login/senha) a cada 30 minutos, mantendo a sessão segura e fluida.



### 🧪 Testes de Cenários Adversos (Edge Cases)
Não testamos apenas o "caminho feliz". Implementamos testes para:
* **Usuários não autorizados:** Garantindo que um usuário não consiga alterar ou deletar dados de terceiros (HTTP 403 Forbidden).
* **Expiração de Token:** Uso do `freezegun` para simular a passagem de tempo e validar o erro `ExpiredSignatureError`.
* **Credenciais Inválidas:** Testes rigorosos para usuários inexistentes e senhas incorretas.

### 🏭 Fábrica de Modelos (Factory-boy)
Substituímos a criação manual de objetos de teste pela `UserFactory`. Isso permite:
* Criar múltiplos usuários de forma sequencial e automática.
* Manter os testes limpos e focados na lógica, não no setup de dados.

## 🏗️ Evolução da Arquitetura e Modelagem (Aula 10)

Nesta etapa, a aplicação expandiu sua lógica de negócio para gerenciar tarefas vinculadas a usuários específicos:

### 🔗 Modelagem Relacional (SQLAlchemy)
Implementamos a relação entre `User` e `Todo`:
* **1:N (One-to-Many):** Cada usuário possui uma lista de tarefas.
* **Cascade Delete:** Configuração `delete-orphan` para garantir que, ao excluir um usuário, todas as suas tarefas sejam removidas automaticamente.
* **Enums:** Uso de `TodoState` para padronizar os estados das tarefas (`draft`, `todo`, `doing`, `done`, `trash`).



### 🔍 Endpoints Inteligentes e Filtragem
O CRUD de tarefas foi desenhado para ser flexível e performático:
* **Filtros Dinâmicos:** Implementação de busca por `title`, `description` e `state` usando o operador `.contains` do SQLAlchemy.
* **Paginação:** Suporte nativo a `limit` e `offset` via Query Strings.
* **Patch Dinâmico:** Atualização parcial de recursos usando `model_dump(exclude_unset=True)`.

### 🏭 Testes Avançados (Factory-boy Fuzzy)
Evoluímos a `TodoFactory` para simular cenários complexos:
* **FuzzyChoice:** Geração de estados de tarefas aleatórios para testes de listagem.
* **Batch Testing:** Uso de `create_batch` para testar paginação e filtros com grandes volumes de dados.

---

## ⚙️ Configuração do Ambiente

Para garantir que o ambiente seja isolado e organizado, utilizamos o **Poetry** gerenciado pelo **pipx**.

### 1. Instalação do Pipx e Poetry
A recomendação é instalar o Poetry de forma global e isolada via `pipx`:

```bash
# Instalar o pipx(caso não tenha)
pip install --user pipx

# Instalar o Poetry
pipx install poetry
```

### 2. Gerenciamento de versões do Python
Após a instalação do Poetry, podemos utilizá-lo para gerenciar e instalar versões do Python que desejamos usar em um projeto. Para acompanhar este curso, a versão mínima do Python é a 3.11, pois alguns recursos que utilizaremos foram introduzidos nessa versão.

Recomenda-se sempre usar a versão mais atualizada possível (3.12 ou 3.13). Para solicitar ao Poetry que instale uma versão específica:

```bash
# Instalando a versão 3.13 (Recomendado)
poetry python install 3.13
```

### 3. Criando o Projeto e Configurando o Ambiente
Com o Poetry e a versão do Python disponíveis, iniciamos o projeto com a estrutura --flat e configuramos o ambiente para usar a versão desejada:

```bash
# Criando o projeto
poetry new --flat fastapi_zero
cd fastapi_zero

# Informando ao Poetry qual versão usar
poetry env use 3.13
```

## 📦 Gerenciamento de Dependências
O projeto utiliza o Poetry para um gerenciamento preciso de pacotes, separando o que é essencial para o funcionamento da API do que é necessário apenas durante o desenvolvimento.

### 1. Dependências de Produção
Além do core do FastAPI, instalamos as bibliotecas necessárias para a persistência de dados e segurança (hashing e tokens):

```bash
# Instalação do Framework e ferramentas padrão
poetry install 
poetry add 'fastapi[standard]' 

# Habilitando o ambiente virtual
poetry shell

# Iniciando o servidor de desenvolvimento
fastapi dev fast_zero/app.py

# Banco de Dados (ORM e Migrações)
poetry add sqlalchemy alembic

# Segurança e Autenticação (Aula 06)
poetry add pyjwt "pwdlib[argon2]"
```

### 2. Instalando Ferramentas de Desenvolvimento
As ferramentas abaixo foram selecionadas por sua utilidade no desenvolvimento e são instaladas no grupo `--group dev` para não afetar o ambiente de produção:

* **taskipy:** Executor de comandos para simplificar tarefas repetitivas.

* **pytest:** Framework para escrita e execução de testes.

* **ruff:** Analisador estático (linter) e formatador de código baseado na PEP-8.

```bash
poetry add --group dev pytest pytest-cov taskipy ruff
```

### 3. Sincronização do Ambiente
Caso você esteja baixando este projeto agora, utilize o comando abaixo para instalar todas as dependências (produção e dev) de uma vez e habilitar o ambiente virtual:

```bash
# Instala tudo o que está no arquivo lock
poetry install

# Habilita o ambiente virtual
poetry shell

```

### 4. Novas Ferramentas de Teste (Dev)
Para suportar o asincronismo, adicionamos as seguintes bibliotecas:

```bash
# SQLAlchemy com suporte a asyncio e driver para SQLite assíncrono
poetry add "sqlalchemy[asyncio]" aiosqlite

# Suporte ao Pytest para lidar com corrotinas
poetry add --group dev pytest-asyncio
```

Para garantir a robustez da Aula 09, instalamos:

```bash
# Geração de dados fakes e modelos
poetry add --group dev factory-boy

# Manipulação de tempo em testes
poetry add --group dev freezegun
```

## 🔧 Configuração das Ferramentas (pyproject.toml)
Após a instalação, as ferramentas são configuradas individualmente no arquivo `pyproject.toml.`

### Ruff
Para configurar o ruff montamos a configuração em 3 tabelas distintas no arquivo `pyproject.toml.` Uma para as configurações globais, uma para o linter e uma para o formatador.

#### Configuração Global
Na configuração global, definimos o comprimento de linha para **79 caracteres** (conforme PEP-8) e ignoramos a pasta `migrations` (pois o código gerado automaticamente pelo Alembic não deve ser alterado manualmente).

Atualizando o arquivo: `pyproject.toml`
```bash
[tool.ruff]
line-length = 79
extend-exclude = ['migrations']
```

#### Linter
Durante a análise estática do código, queremos buscar por coisas específicas. No Ruff, precisamos dizer exatamente o que ele deve analisar. Isso é feito por códigos. Usaremos estes:

* **`I`(Isort)**: Ordenação de imports.
* **`F` (Pyflakes):**: Procura por alguns erros em relação a boas práticas de código
* **`E` (Erros pycodestyle):**: Erros de estilo de código
* **`W` (Avisos pycodestyle):**: Avisos de coisas não recomendadas no estilo de código
* **`PL` (Pylint):**: Como o `F`, também procura por erros em relação a boas práticas de código
* **`PT` (flake8-pytest):**: Checagem de boas práticas do Pytest

Adicionamos a regra **`FAST`** para garantir que o código siga as melhores práticas específicas do framework FastAPI.

Atualizando o arquivo: `pyproject.toml`
```bash
[tool.ruff.lint]
preview = true
select = ['I', 'F', 'E', 'W', 'PL', 'PT', 'FAST']
```

#### Formatter
A formatação do Ruff praticamente não precisa ser alterada. Pois ele vai seguir as boas práticas e usar a configuração global de `79` caracteres por linha. A única alteração que farei é o uso de aspas simples `'` no lugar de aspas duplas `"`:

Atualizando o arquivo: `pyproject.toml`
```bash
[tool.ruff.format]
preview = true
quote-style = 'single'
```

### Pytest
Configurado para reconhecer a raiz do projeto e suprimir warnings para uma visualização mais limpa:

Atualizando o arquivo: `pyproject.toml`
```bash
[tool.pytest.ini_options]
pythonpath = "."
addopts = '-p no:warnings'
```

### Taskipy(Task Runner)
O Taskipy atua como um executor de tarefas para substituir comandos complexos por atalhos simples.

### Comandos de Automação
Alguns comandos:

Atualizando o arquivo: `pyproject.toml`
```bash
[tool.taskipy.tasks]
lint = 'ruff check'
pre_format = 'ruff check --fix'
format = 'ruff format'
run = 'fastapi dev fast_zero/app.py'
pre_test = 'task lint'
test = 'pytest -s -x --cov=fast_zero -vv'
post_test = 'coverage html'
```

**Como funciona a execução em cadeia:** Ao executar `task test`, o Taskipy executa automaticamente o `pretest` (que roda o lint). Se o lint passar, os testes são executados e, ao final, o `post_test` gera o relatório de cobertura em HTML.

## 🚀 Como Executar o Projeto
Com o ambiente configurado, não é necessário decorar comandos longos. Basta ativar o ambiente virtual e usar as `tasks`:

1. **Instale as dependências:**: `poetry install`
2. **Configure o arquivo** `.env`: Crie um arquivo `.env` baseado no `.env.example`.
3. **Ativar o ambiente**: `poetry shell`
4. **Rodar o servidor**: `task run`
5. **Rodar os testes**: `task test`

| Comando| O que faz|
| :--- | :--- |
| `task lint` | Verifica erros e boas práticas no código. |
| `task format` | Padronização automática do estilo do código (PEP-8). |
| `task run` | Inicia o servidor FastAPI em modo de desenvolvimento. |
| `task test` | Executa a suíte de testes completa.|

