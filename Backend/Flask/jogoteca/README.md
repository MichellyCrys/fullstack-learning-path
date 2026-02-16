# 🎮 Jogoteca - Catálogo de Jogos

![Python Version](https://img.shields.io/badge/python-3.x-blue?logo=python)
![Flask](https://img.shields.io/badge/flask-%23000.svg?logo=flask&logoColor=white)
![Jinja2](https://img.shields.io/badge/jinja-%23b41717.svg?logo=jinja&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511f2.svg?logo=bootstrap&logoColor=white)

A **Jogoteca** é uma aplicação web desenvolvida em Python utilizando o framework **Flask**. O projeto foca em fundamentos do desenvolvimento server-side, manipulação de rotas e persistência temporária de dados.

---

## 🚀 Funcionalidades Implementadas

Neste projeto, foram desenvolvidos os conceitos fundamentais para aplicações web robustas:

* **Sistema de Autenticação:** Controle de acesso com login e autorização para proteger rotas sensíveis.
* **Listagem Dinâmica:** Renderização de tabelas de jogos consumindo dados do servidor via Python.
* **Cadastro de Itens:** Formulários para inserção de novos títulos com validação de dados.
* **Gestão de Sessão:** Uso do objeto `session` e `flash` messages para feedback visual ao usuário.
* **Arquitetura de Templates:** Implementação do motor **Jinja2** com herança de blocos para criação de layouts modulares.



---

## 🛠️ Tecnologias e Bibliotecas

* **Framework Principal:** Flask
* **Template Engine:** Jinja2
* **Estilização:** Bootstrap 4/5 (Responsivo)
* **Linguagem:** Python 3

---

## 💻 Como Executar o Projeto

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Backend/Flask/jogoteca
    ```

2.  **(Opcional) Crie e ative um ambiente virtual:**
    ```bash
    python -m venv venv
    .\venv\Scripts\activate  # Windows
    ```

3.  **Instale o Flask:**
    ```bash
    pip install flask
    ```

4.  **Inicie a aplicação:**
    ```bash
    python jogoteca.py
    ```

5.  **Acesse no navegador:**
    `http://localhost:5000`

---
> *Desenvolvido durante o curso "Flask: crie uma webapp com Python" (Alura).*