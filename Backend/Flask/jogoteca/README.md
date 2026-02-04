# 🎮 Jogoteca - Catálogo de Jogos

A **Jogoteca** é uma aplicação web desenvolvida em Python utilizando o framework Flask. O projeto permite que usuários autenticados gerenciem uma lista de jogos, incluindo a visualização e o cadastro de novos títulos.

---

## 🚀 Funcionalidades Implementadas

Neste projeto, foram desenvolvidos os conceitos fundamentais para aplicações web robustas:

* **Sistema de Autenticação:** Implementação de controle de acesso com login e autorização para garantir que apenas usuários permitidos possam adicionar novos jogos.
* **Listagem Dinâmica:** Exibição de uma tabela de jogos cadastrados consumindo dados do servidor.
* **Cadastro de Itens:** Formulário para inserção de novos jogos (nome, categoria e console) com validação básica.
* **Gestão de Sessão:** Uso do objeto `session` do Flask para manter o estado do usuário logado entre diferentes requisições.
* **Templates Reutilizáveis:** Uso do motor de templates Jinja2 e herança de blocos com um template mestre para evitar repetição de código HTML.

---

## 🛠️ Tecnologias e Bibliotecas

* **Framework Principal:** Flask (Python).
* **Estilização:** Bootstrap para um design responsivo e elegante.
* **Linguagem:** Python 3.

---

## 💻 Como Executar o Projeto

1.  **Certifique-se de ter o Python instalado.**
2.  **Instale o Flask (caso não tenha):**
    ```bash
    pip install flask
    ```
3.  **Navegue até a pasta do projeto:**
    ```bash
    cd Backend/jogoteca
    ```
4.  **Inicie a aplicação:**
    ```bash
    python3 jogoteca.py
    ```
5.  **Acesse no navegador:**
    `http://localhost:5000`

---
Desenvolvido durante o curso "Flask: crie uma webapp com Python" (Alura).