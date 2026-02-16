# 📚 Bookstore API - FastAPI

![Python Version](https://img.shields.io/badge/python-3.10%2B-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-05998b?logo=fastapi&logoColor=white)
![Uvicorn](https://img.shields.io/badge/ASGI-Uvicorn-black?logo=python)
![Swagger](https://img.shields.io/badge/Docs-Swagger-85EA2D?logo=swagger&logoColor=black)

Esta é uma API desenvolvida em Python utilizando o framework **FastAPI**. O projeto simula o sistema de uma livraria, focando em conceitos fundamentais de rotas, tipagem e documentação automática.

---

## 🚀 Funcionalidades

* **Listar Livros:** Endpoint para retornar as informações detalhadas das obras disponíveis.
* **Processar Compras:** Lógica inicial para simular a aquisição de títulos.
* **Documentação Interativa:** Interface de teste da API gerada automaticamente.

---

## 🛠️ Tecnologias e Ferramentas

* **Framework:** FastAPI
* **Servidor ASGI:** Uvicorn
* **Linguagem:** Python 3.10+
* **Validação:** Pydantic (Type Hints)

---

## 💻 Como Executar

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Backend/FastAPI/bookstore
    ```

2.  **(Opcional) Crie e ative um ambiente virtual:**
    ```bash
    python -m venv venv
    .\venv\Scripts\activate  # Windows
    # source venv/bin/activate  # Linux/Mac
    ```

3.  **Instale as dependências:**
    ```bash
    pip install fastapi uvicorn
    ```

4.  **Inicie o servidor:**
    ```bash
    uvicorn main:app --reload
    ```

5.  **Acesse a documentação:**
    * **Swagger UI:** `http://127.0.0.1:8000/docs`
    * **ReDoc:** `http://127.0.0.1:8000/redoc`

---
> *Este projeto foi desenvolvido durante o curso "FastAPI em Python em 1 hora - Iniciante".*