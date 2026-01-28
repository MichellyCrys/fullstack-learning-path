# 📝 MemoTeca - Mural de Pensamentos

O **MemoTeca** é um mural de pensamentos virtual desenvolvido em Angular. A aplicação funciona como um repositório pessoal onde é possível armazenar citações de livros, trechos de músicas e frases inspiradoras para consultas futuras ou legendas de fotos.

---

## 🚀 Funcionalidades (CRUD Completo)

Neste projeto, foi desenvolvido um fluxo completo de gerenciamento de dados:

* **Criar Pensamento:** Interface para adicionar novas frases, permitindo escolher entre diferentes modelos visuais.
* **Listar Pensamentos:** Visualização de todos os cards salvos, consumindo dados de uma API local.
* **Editar Pensamento:** Possibilidade de atualizar o conteúdo ou a autoria de pensamentos já existentes.
* **Excluir Pensamento:** Remoção de registros do mural com confirmação.

---

## 🛠️ Conceitos de Angular Aplicados

Durante o desenvolvimento, foram explorados os seguintes pilares do framework:

* **Componentização:** Divisão da interface em partes reutilizáveis como `Cabeçalho`, `Rodapé` e `Pensamentos`.
* **Data Binding:** Uso intensivo de *Property Binding*, *Event Binding* e *Two-way Data Binding* (`[(ngModel)]`) para sincronização de dados.
* **Serviços e Injeção de Dependência:** Criação do `PensamentoService` para centralizar a comunicação com a API via `HttpClient`.
* **Roteamento Dinâmico:** Configuração de rotas para navegação fluida entre a listagem e os formulários de criação/edição.
* **Diretivas:** Uso de diretivas estruturais como `*ngFor` para listar os cards e `*ngIf` para validações.

---

## 💻 Tecnologias e Ferramentas

* **Framework:** Angular (v14+).
* **Backend Simulado:** JSON Server para simular uma API REST.
* **Estilização:** CSS Customizado focado em layouts responsivos.

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
Desenvolvido durante o curso de Angular (Alura).
