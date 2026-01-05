import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pensamento } from '../pensamento/pensamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    Pensamento,
    CommonModule,
],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo:'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input',
      autoria: 'Componente filho',
      modelo:'modelo2'
    }
  ];

  constructor(){
  }

  ngOnInit(): void {
  }
}
