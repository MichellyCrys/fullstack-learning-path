from flask import Flask, render_template

class Jogo:
    def __init__(self, nome, categoria, console):
        self.nome = nome
        self.categoria = categoria
        self.console = console

app = Flask(__name__)

@app.route('/inicio')
def ola():
    jogo1 = Jogo('Super Mario', 'Ação', 'SNES')
    jogo2 = Jogo('Pokemon Gold', 'RPG', 'GBA')
    jogo3 = Jogo('Tetris', 'Puzzle', 'Atari')

    lista = [jogo1, jogo2, jogo3]
    return render_template('lista.html', titulo='Jogos', jogos = lista)

app.run()