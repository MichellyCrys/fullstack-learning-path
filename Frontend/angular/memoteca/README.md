# 📝 MemoTeca - Mural de Pensamentos (Versão Evoluída)

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=flat&logo=reactivex&logoColor=white)
![JSON Server](https://img.shields.io/badge/api-json--server-black)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511f2.svg?style=flat&logo=bootstrap&logoColor=white)

O **MemoTeca** é um mural de pensamentos virtual desenvolvido em **Angular**. A aplicação evoluiu de um protótipo inicial para uma ferramenta completa com validações rigorosas, busca dinâmica, paginação e sistema de favoritos.

---

## 🚀 Funcionalidades e Evolução

Neste projeto, além do fluxo de **CRUD Completo**, foram implementadas as seguintes melhorias:

* **Formulários Reativos:** Migração total para o modelo de `Reactive Forms`, garantindo maior controle e escalabilidade.
* **Validações de Formulário:** Implementação de regras de validação (campos obrigatórios, quantidade de caracteres e validações customizadas).
* **Busca e Filtragem:** Campo de busca dinâmica que filtra os pensamentos em tempo real através da API.
* **Paginação:** Sistema de "Carregar mais" para otimizar a performance.
* **Sistema de Favoritos:** Lógica para favoritar pensamentos com persistência no banco de dados e filtro exclusivo.
* **Recarregamento Inteligente:** Uso do serviço `Router` para forçar a atualização da interface sem refresh total.

---

## 🛠️ Conceitos Avançados Aplicados

* **Reactive Forms & FormBuilder:** Criação de formulários programáticos com estados de validade em tempo real.
* **Comunicação Avançada (HTTP):** Uso de `HttpParams` para enviar parâmetros de busca, ordenação e paginação dinamicamente.
* **Lógica de Reutilização:** Adaptação de componentes para lidar com diferentes estados de listagem.
* **Injeção de Dependência:** Uso de serviços para centralizar regras de negócio e comunicação externa.

---

## 💻 Tecnologias e Ferramentas

* **Framework:** Angular (v14+).
* **Backend Simulado:** JSON Server (API REST).
* **Estilização:** CSS Customizado e Bootstrap.
* **Linguagem:** TypeScript.

---

## 🚀 Como Executar o Projeto

Este projeto requer o **Node.js** e o **Angular CLI** instalados.

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o Backend (JSON Server):**
    Abra um terminal separado na pasta `backend` e execute:
    ```bash
    npm start
    ```

3.  **Inicie o Frontend:**
    No terminal principal, execute:
    ```bash
    ng serve
    ```

4.  **Acesse no navegador:**
    `http://localhost:4200`

---
> *Desenvolvido durante os cursos de Angular da **Alura**.*
