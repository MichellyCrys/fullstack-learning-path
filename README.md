# 📚 Meus Cursos e Projetos (Alura, Udemy)

Este repositório centraliza os projetos que desenvolvi durante minha jornada de aprendizado em Backend, Frontend e DevOps, focando em tecnologias como Python (Flask/FastAPI), Angular e Docker.

---

## 🖥️ Backend

## [FastAPI](./Backend/FastAPI/bookstore)
**Curso** *FastAPI em Python em 1 hora - Iniciante*

Desenvolvimento de uma API para gerenciamento de uma livraria. O projeto serve como base sólida para sistemas de e-commerce, podendo ser adaptado para qualquer tipo de loja (eletrônicos, pizzarias, etc).

**O que foi desenvolvido/aprendido:**
* **Criação de Endpoints:** Estruturação de rotas para listagem de livros e ações de compra.
* **Tipagem e Validação:** Uso de *Type Hints* do Python e Pydantic para garantir a integridade dos dados.
* **Documentação Automática:** Exploração do Swagger UI (`/docs`) e ReDoc (`/redoc`) gerados automaticamente.
* **Performance:** Introdução ao conceito de APIs assíncronas e alta performance com o FastAPI.

### [Flask - Jogoteca](./Backend/Flask/jogoteca)
**Curso:** *Flask: crie uma webapp com Python - Alura*

A Jogoteca é uma aplicação web para gerenciamento de uma lista de jogos, onde é possível adicionar novos títulos e realizar login no sistema.

**O que foi desenvolvido:**
* **Fundamentos Web:** Criação de uma aplicação web robusta com Flask.
* **Interface:** Uso de HTML e Bootstrap para um design responsivo e elegante.
* **Segurança:** Implementação de sistema de login e controle de autorização.
* **Dinamismo:** Definição de rotas, redirecionamentos, templates e URLs dinâmicas.

---

## 🎨 Frontend

### [Buscante - Acessibilidade no Angular](./Frontend/angular/acessibilidade-angular/a11y-buscante)
**Curso:** *Acessibilidade no Angular: aprimorando formulários, modais e rotas - Alura*

Neste projeto, apliquei técnicas avançadas de acessibilidade (a11y) em uma aplicação de busca de livros utilizando a API do Google Books. O foco foi garantir que a navegação e interação fossem plenamente funcionais para todas as pessoas.

**O que foi desenvolvido/aprendido:**
* **Navegação Semântica:** Uso de `RouterLinkActive` e `aria-current` para indicar links ativos, além de títulos dinâmicos para rotas.
* **Gerenciamento de Foco:** Implementação da diretiva `focusTrap` do módulo `a11yModule` (Angular CDK) para prender o foco dentro de modais abertos.
* **Formulários Acessíveis:** Integração de atributos como `aria-invalid`, `aria-describedby` e `aria-disabled` para fornecer contexto claro em campos de entrada e botões.
* **Feedback Auditivo:** Uso do `LiveAnnouncer` para fornecer notificações de voz dinâmicas em resposta a eventos da aplicação.
* **Manipulação do DOM:** Uso de `Renderer2` e `ElementRef` para controle fino de scroll e foco sem comprometer a segurança ou performance.
* **Identificação Semântica:** Aplicação rigorosa de atributos ARIA para descrições de imagens e componentes interativos.


### [JS Orientação a Objetos](./Frontend/javascript/js-poo)
**Curso:** *JavaScript: programando a Orientação a Objetos - Alura*

Neste curso, dominei o paradigma de programação orientado a objetos aplicado ao JavaScript, essencial para a criação de sistemas modulares e escaláveis.

**O que foi desenvolvido/aprendido:**
* **Paradigma POO:** Domínio do paradigma mais usado no mercado de desenvolvimento.
* **Referências e Objetos:** Entendimento profundo de como o JavaScript lida com instâncias e memória.
* **Membros de Classe:** Uso prático de atributos e métodos (tanto de instância quanto estáticos/da classe).
* **Construtores:** Definição de objetos de forma padronizada através de funções construtoras.
* **Encapsulamento:** Implementação de proteção de dados e interfaces limpas.

### [Angular - Memoteca](./Frontend/angular/memoteca/)
**Cursos:** 
1. *Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD*
2. *Angular 14: evoluindo a aplicação*

O MemoTeca é um mural de pensamentos virtual que evoluiu de um CRUD básico para uma aplicação robusta com filtros e validações avançadas.

**O que foi desenvolvido/evoluído:**
* **CRUD Completo:** Criação, listagem, edição e exclusão de pensamentos.
* **Reactive Forms:** Migração de formulários para o modelo reativo, com validações customizadas e mensagens de erro dinâmicas.
* **Paginação e Filtros:** Implementação de busca por texto e sistema de "Carregar mais" para performance.
* **Lógica de Favoritos:** Funcionalidade para favoritar pensamentos e filtrar apenas os preferidos.
* **Comunicação com API:** Uso avançado do `HttpClient` com parâmetros de busca e ordenação.
### [Indexa - Agenda de Contatos](./Frontend/angular/indexa)
**Curso:** *Angular: construa uma aplicação web com componentes, linguagem de template e CLI - Alura*

O Indexa é uma aplicação de agenda de contatos onde pratiquei a organização de dados e o uso de recursos modernos do Angular.

**O que foi desenvolvido/aprendido:**
* **Componentes Reutilizáveis:** Criação de uma arquitetura modular com componentes independentes.
* **Modern Control Flow:** Uso da nova linguagem de template do Angular, especificamente a diretiva `@for` para controle de fluxo de dados.
* **Manipulação de Dados Local:** Implementação de leitura de arquivos **JSON** para carregar informações na interface.
* **Configurações Técnicas:** Ajustes no `tsconfig.json` para suporte a importações de módulos JSON e otimização do projeto.
* **Angular CLI & Estilização:** Domínio total da CLI para geração de estrutura e prática avançada de CSS para componentes.

---

## 🏗️ DevOps & Infraestrutura

### [Docker Completo do Zero ao Avançado (Udemy)](./DevOps/docker)
**Curso:** *Udemy - DOCKER Completo do Zero ao Avançado*

Neste curso, aprendi a construir, testar e implementar containers do zero ao avançado. Como projeto final, utilizei o **Docker Compose** para orquestrar uma aplicação completa com Backend e Frontend integrados.

**O que foi desenvolvido/aprendido:**
* **Orquestração:** Criação de arquivos `docker-compose.yml` para rodar múltiplos serviços simultaneamente.
* **Persistência de Dados:** Uso de volumes para garantir que dados (como bancos de dados) não sejam perdidos ao reiniciar containers.
* **Redes no Docker:** Comunicação entre containers de diferentes tecnologias.
* **Imagens Personalizadas:** Criação de imagens otimizadas para ambientes de desenvolvimento e produção.

#### 📝 Comandos Úteis Praticados:
* **Gerenciamento de Containers:** `docker run`, `docker stop`, `docker start`, `docker rm`.
* **Visualização e Inspeção:** `docker ps -a`, `docker volume inspect`.
* **Volumes e Portas:** `docker run -d -p 3000:3000 -v nome-volume:/caminho/dados im* **Ferramentas:** Git, GitHub, Angular CLI, Docker & Docker Compose.agem:tag`.
* **Docker Compose:** `docker compose up`, `docker compose down`, `docker compose ps`, `docker compose up --build`.

---


## 🛠️ Tecnologias Utilizadas

* **Linguagens:** Python, TypeScript, JavaScript, HTML, CSS.
* **Frameworks/Bibliotecas:** Flask, FastAPI, Angular (v14, v17+), Angular CDK.
* **Padrões e Práticas:** Acessibilidade Web (WCAG/ARIA), POO, Mobile First.
* **Estilização:** Bootstrap.
* **Ferramentas:** Git, GitHub, Angular CLI, Docker & Docker Compose, Uvicorn.

---
Desenvolvido por **Michelly Crystiane**.