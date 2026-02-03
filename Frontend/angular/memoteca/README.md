# 📝 MemoTeca - Mural de Pensamentos (Versão Evoluída)

O **MemoTeca** é um mural de pensamentos virtual desenvolvido em Angular. A aplicação evoluiu de um protótipo inicial para uma ferramenta completa com validações rigorosas, busca dinâmica, paginação e sistema de favoritos.

---

## 🚀 Funcionalidades e Evolução

Neste projeto, além do fluxo de **CRUD Completo** (Criar, Listar, Editar e Excluir), foram implementadas as seguintes melhorias:

* **Formulários Reativos:** Migração total para o modelo de `Reactive Forms`, garantindo maior controle e escalabilidade no tratamento de dados.
* **Validações de Formulário:** Implementação de regras de validação (campos obrigatórios, quantidade de caracteres e validações customizadas) usando a classe `Validators`.
* **Busca e Filtragem:** Campo de busca dinâmica que filtra os pensamentos em tempo real através da API.
* **Paginação:** Sistema de "Carregar mais" para otimizar a performance e a exibição de grandes volumes de dados.
* **Sistema de Favoritos:** Lógica para favoritar/desfavoritar pensamentos, com persistência no banco de dados e filtro exclusivo para visualizar apenas os preferidos.
* **Recarregamento Inteligente:** Uso do serviço `Router` para forçar o recarregamento de componentes e atualização da interface sem refresh total da página.

---

## 🛠️ Conceitos Avançados de Angular Aplicados

Durante a evolução do projeto, explorei técnicas avançadas do framework:

* **Reactive Forms & FormBuilder:** Criação de formulários programáticos com estados de validade em tempo real.
* **Comunicação Avançada com API:** Uso de `HttpParams` para enviar parâmetros de busca, ordenação e paginação dinamicamente via URL.
* **Lógica de Reutilização:** Adaptação de componentes para lidar com diferentes estados (como a listagem normal vs. listagem de favoritos).
* **Injeção de Dependência:** Uso aprimorado de serviços para centralizar regras de negócio e comunicação externa.

---

## 💻 Tecnologias e Ferramentas

* **Framework:** Angular (v14+).
* **Backend Simulado:** JSON Server (API REST).
* **Estilização:** CSS Customizado e Bootstrap.
* **Linguagem:** TypeScript.

---

## 🚀 Como Executar o Projeto

Este projeto requer o **Node.js** e o **Angular CLI** instalados.

1.  **Instale as dependências do frontend:**
    ```bash
    npm install
    ```

2.  **Inicie o Backend (JSON Server):**
    Abra um terminal separado na pasta `backend` e execute:
    ```bash
    npm start
    ```
    *(O servidor rodará em `http://localhost:3000` por padrão).*

3.  **Inicie o Frontend:**
    No terminal da pasta raiz do projeto, execute:
    ```bash
    ng serve
    ```

4.  **Acesse no navegador:**
    `http://localhost:4200`

---
Desenvolvido durante os cursos de Angular da **Alura**.
