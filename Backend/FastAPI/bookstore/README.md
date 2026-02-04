# 📚 Bookstore API - FastAPI

Esta é uma API desenvolvida em Python utilizando o framework **FastAPI**. O projeto simula o sistema de uma livraria, onde é possível gerenciar informações sobre livros e realizar operações de compra.

---

## 🚀 Funcionalidades

* **Listar Livros:** Endpoint para retornar as informações detalhadas das obras disponíveis.
* **Processar Compras:** Lógica para simular a aquisição de títulos.
* **Documentação Interativa:** Acesso imediato à interface de teste da API via Swagger.

---

## 🛠️ Tecnologias e Ferramentas

* **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
* **Servidor ASGI:** [Uvicorn](https://www.uvicorn.org/)
* **Linguagem:** Python 3.10+
* **Validação:** Pydantic

---

## 💻 Como Executar

1.  **Navegue até a pasta do projeto:**
    ```bash
    cd Backend/FastAPI/bookstore
    ```

2.  **(Opcional) Crie e ative um ambiente virtual:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Linux/Mac
    ```

3.  **Instale o FastAPI e o Uvicorn:**
    ```bash
    pip install fastapi uvicorn
    ```

4.  **Inicie o servidor:**
    ```bash
    uvicorn main:app --reload
    ```

5.  **Acesse a documentação:**
    * Swagger UI: `http://127.0.0.1:8000/docs`
    * ReDoc: `http://127.0.0.1:8000/redoc`

---
Desenvolvido durante o curso "FastAPI em Python em 1 hora - Iniciante".