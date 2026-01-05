import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-criar-pensamento',
  imports: [
    FormsModule,
    RouterLink
],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento implements OnInit{

  pensamento ={
    id:'1',
    conteudo:'Aprendendo Angular',
    autoria:'Dev',
    modelo: 'modelo1'
  }

  constructor(){
  }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento criado!")
  }

  cancelarPensamento(){
    alert("Pensamento cancelado!")
  }

}
