import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from "./componentes/container/container";
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Separador } from "./componentes/separador/separador";
import { Contato } from "./componentes/contato/contato";
import { FormsModule } from '@angular/forms';

interface ContatoInterface{
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Container,
    Cabecalho,
    Separador,
    Contato,
    FormsModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: ContatoInterface[] = agenda;

  filtroPorTexto: string = ''

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): ContatoInterface[]{
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })

  }

  filtrarContatosPorLetraInicial(letra:string): ContatoInterface[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
}
