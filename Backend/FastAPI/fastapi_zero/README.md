# 🚀 FastAPI do Zero

![Python Version](https://img.shields.io/badge/python-3.13%2B-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115%2B-05998b?logo=fastapi)
![Poetry](https://img.shields.io/badge/Packaging-Poetry-blue?logo=poetry)
![Ruff](https://img.shields.io/badge/Linter-Ruff-orange)
![TDD](https://img.shields.io/badge/Tests-Pytest-yellow?logo=pytest)

Este projeto está sendo desenvolvido durante o curso **FastAPI do Zero (Edição 2025)**, ministrado pelo Dunossauro. O foco principal é aprender a construir APIs robustas, testáveis e performáticas seguindo as melhores práticas do mercado.

---

## 🛠️ Tecnologias e Ferramentas (Stack 2025)

* **Python 3.13+**
* **FastAPI (v0.115+):** Framework moderno e de alta performance.
* **Poetry:** Gerenciamento de dependências e ambientes virtuais.
* **Pydantic (v2.0+):** Validação de dados e schemas.
* **SQLAlchemy (v2.0+):** ORM para comunicação com banco de dados.
* **Alembic:** Gerenciamento de migrações.
* **Pytest:** Foco total em TDD (Test-Driven Development).
* **Ruff:** Linter e formatador de código (extremamente rápido).
* **Taskipy:** Executor de tarefas automatizadas.

---

## 📈 Progresso do Aprendizado

- [x] **Aula 01:** Configuração de ambiente e "Hello World" com testes automatizados.
- [x] **Aula 02:** Fundamentos do desenvolvimento web e funcionamento do FastAPI.
- [x] **Aula 03:** Implementação completa das operações **CRUD** básicas.
- [x] **Aula 04:** Integração com **Banco de Dados (SQLAlchemy)** e gerenciamento de **Migrações (Alembic)**.
- [ ] **Aulas Futuras:** Integração com banco de dados real, Autenticação JWT, Programação Assíncrona, Docker e CI/CD.

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

### 1. Instalando o FastAPI
Com a base pronta, instalamos o FastAPI utilizando o bundle standard e habilitamos o ambiente virtual:

```bash
# Instalação
poetry install 
poetry add 'fastapi[standard]' 

# Habilitando o ambiente virtual
poetry shell

# Iniciando o servidor de desenvolvimento
fastapi dev fast_zero/app.py
```

### 2. Instalando Ferramentas de Desenvolvimento
As ferramentas abaixo foram selecionadas por sua utilidade no desenvolvimento e são instaladas no grupo `--group dev` para não afetar o ambiente de produção:

* **taskipy:** Executor de comandos para simplificar tarefas repetitivas.

* **pytest:** Framework para escrita e execução de testes.

* **ruff:** Analisador estático (linter) e formatador de código baseado na PEP-8.

```bash
poetry add --group dev pytest pytest-cov taskipy ruff
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

Atualizando o arquivo: `pyproject.toml`
```bash
[tool.ruff.lint]
preview = true
select = ['I', 'F', 'E', 'W', 'PL', 'PT']
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

1. **Ativar o ambiente**: `poetry shell`
2. **Rodar o servidor**: `task run`
3. **Rodar os testes**: `task test`

| Comando| O que faz|
| :--- | :--- |
| `task lint` | Verifica erros e boas práticas no código. |
| `task format` | Padroniza o estilo do código (PEP-8). |
| `task run` | Inicia o servidor FastAPI em modo de desenvolvimento. |
| `task test` | Executa a suíte de testes completa.|

