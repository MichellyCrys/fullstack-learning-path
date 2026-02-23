# 🏗️ Docker: Completo do Zero ao Avançado (Udemy)

![Docker](https://img.shields.io/badge/docker-%232496ed.svg?style=flat&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/docker%20compose-%232496ed.svg?style=flat&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)

Este diretório contém os projetos e configurações desenvolvidos durante o curso prático de Docker. O foco foi aprender a conteinerizar aplicações, gerenciar imagens e orquestrar múltiplos serviços com **Docker Compose**.

---

## 🚀 Projetos Desenvolvidos

### 1. [Aplicação Node.js (App)](./app)
Neste projeto inicial, pratiquei os fundamentos de criação de imagens e gerenciamento de containers.
* **Dockerfile:** Criação de uma imagem personalizada baseada em Node.js.
* **Versionamento:** Prática de builds com tags (ex: `app:v2`).
* **Persistência:** Uso de volumes nomeados para persistir dados da aplicação.

### 2. [Clone Netflix (Full Stack)](./netflix)
Um projeto complexo utilizando **Docker Compose** para gerenciar a comunicação entre diferentes serviços.
* **Backend:** API em Node.js com configurações de migração de banco de dados.
* **Frontend:** Interface em React integrada ao ecossistema de containers.
* **Orquestração:** Uso de um único arquivo `docker-compose.yml` para subir toda a stack de uma vez.

---

## 🛠️ Guia de Comandos Praticados

### Gerenciamento de Containers e Imagens
* `docker run -d app:v2`: Executa um container em modo background.
* `docker ps -a`: Lista todos os containers (ativos e inativos).
* `docker stop/start/rm`: Comandos para parar, iniciar e remover containers.
* `docker cp kiwi2:/app/teste.txt .`: Copia arquivos entre o host e o container.

### Volumes e Redes
* `docker volume inspect app-dados`: Inspeciona detalhes de um volume criado.
* `docker run -d -p 3000:3000 --name kiwi2 -v app-dados:/app/dados app:v2`: Executa container com mapeamento de portas e montagem de volume.

### Docker Compose (Orquestração)
* `docker compose up`: Sobe todos os serviços definidos no arquivo YAML.
* `docker compose up --build`: Força o rebuild das imagens antes de subir os serviços.
* `docker compose down`: Para e remove todos os containers e redes criados pelo Compose.

---

## 💻 Tecnologias
* **Docker Engine** & **Docker Desktop**
* **Docker Compose** (Orquestração)
* **Docker Hub** (Registro de Imagens)
* **Node.js / React** (Bases das aplicações)

---
> *Desenvolvido durante o curso de Docker na Udemy.*