# 🏗️ Docker: Completo do Zero ao Avançado (Udemy)

Este diretório contém os projetos e configurações desenvolvidos durante o curso prático de Docker. O foco foi aprender a conteinerizar aplicações, gerenciar imagens e orquestrar múltiplos serviços com Docker Compose.

---

## 🚀 Projetos Desenvolvidos

### 1. [Aplicação Node.js (App)](./app)
Neste projeto inicial, pratiquei os fundamentos de criação de imagens e gerenciamento de containers.
* **Dockerfile:** Criação de uma imagem personalizada baseada em Node.js.
* **Versionamento:** Prática de builds com tags (ex: `app:v2`).
* **Persistência:** Uso de volumes nomeados para persistir dados da aplicação.

### 2. [Clone Netflix (Full Stack)](./netflix)
Um projeto mais complexo utilizando **Docker Compose** para gerenciar a comunicação entre diferentes serviços.
* **Backend:** API em Node.js com configurações de migração de banco de dados.
* **Frontend:** Interface em React integrada ao ecossistema de containers.
* **Orquestração:** Uso de um único arquivo `docker-compose.yml` para subir toda a stack.

---

## 🛠️ Guia de Comandos Praticados

Durante o curso, utilizei intensivamente os seguintes comandos para gerenciar o ciclo de vida dos containers:

### Gerenciamento de Containers e Imagens
* `docker run -d app:v2`: Executa um container em modo background.
* `docker ps -a`: Lista todos os containers (ativos e inativos).
* `docker stop/start/rm`: Comandos para parar, iniciar e remover containers.
* `docker rm -f`: Remove um container forçadamente.
* `docker cp kiwi2:/app/teste.txt .`: Copia arquivos entre o host e o container.

### Volumes e Redes
* `docker volume inspect app-dados`: Inspeciona detalhes de um volume criado.
* `docker run -d -p 3000:3000 --name kiwi2 -v app-dados:/app/dados app:v2`: Executa container com mapeamento de portas e montagem de volume.

### Docker Compose (Orquestração)
* `docker compose up`: Sobe todos os serviços definidos no arquivo YAML.
* `docker compose up --build`: Força o rebuild das imagens antes de subir os serviços.
* `docker compose ps`: Lista o status dos serviços gerenciados pelo Compose.
* `docker compose down`: Para e remove todos os containers e redes criados pelo Compose.

---

## 💻 Tecnologias
* **Docker Engine**
* **Docker Compose**
* **Docker Hub** (para push/pull de imagens)
* **Node.js / React** (bases das aplicações conteinerizadas)

---
Desenvolvido durante o curso de Docker na Udemy.