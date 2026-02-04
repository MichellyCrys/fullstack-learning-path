from fastapi import FastAPI, HTTPException
import random

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
    if index < 0 or index >= len(BOOK_DATABASE):
        raise HTTPException(404, "Index out of range")
    else:
        return { "books": BOOK_DATABASE[index] }


# /get-random-book -> livro aleatório
@app.get("/get-random-book")
async def get_random_book():
    return random.choice(BOOK_DATABASE)

# /add-book -> adicionar novo livro
@app.post("/add-book")
async def add_book(book: str):
    BOOK_DATABASE.append(book)
    return { "message": f'Book {book} was added' }