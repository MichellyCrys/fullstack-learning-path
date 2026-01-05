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
    },
    {
      conteudo: 'O sol escaldante banhava a Floresta Amazônica em um brilho dourado, seus raios penetrando a densa copa das árvores, iluminando a vida selvagem vibrante abaixo. Araras de plumagem azul e amarela voavam graciosamente acima, seus chamados ecoando pela imensidão verde. No chão da floresta, macacos-aranha saltitavam agilmente entre os cipós, exibindo suas caudas preênseis com destreza inigualável. Uma onça-pintada espreitava em meio à vegetação rasteira, seus olhos penetrantes avaliando cada movimento. A umidade do ar era palpável, o perfume das flores exóticas e da terra úmida enchendo os sentidos.',
      autoria: '',
      modelo:'modelo3'
    }
  ];

  constructor(){
  }

  ngOnInit(): void {
  }
}
