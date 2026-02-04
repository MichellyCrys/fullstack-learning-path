from fastapi import FastAPI

app = FastAPI()

BOOK_DATABASE = [
    "Harry Potter and the Chamber of Secrets",
    "Lord of the Rings",
    "The da Vinci Code"
]


# /           -> boas vindas
@app.get("/")
async def home():
    return "Welcome to my bookstore"
# /list-books -> listar todos os livros
@app.get("/list-books")
async def list_books():
    return { "books": BOOK_DATABASE }


# /list-books-by-index/{index} -> listar um livro
@app.get("/list-books-by-index/{index}")
async def list_books_by_index(index: int):
    return { "books": BOOK_DATABASE[index] }


# /get-random-book -> livro aleatório
# /add-book -> adicionar novo livro