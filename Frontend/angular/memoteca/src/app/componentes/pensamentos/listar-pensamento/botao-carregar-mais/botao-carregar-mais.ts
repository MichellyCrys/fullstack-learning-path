import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  imports: [],
  templateUrl: './botao-carregar-mais.html',
  styleUrl: './botao-carregar-mais.css',
})
export class BotaoCarregarMais implements OnInit{

  @Input() haMaisPensamentos: boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

}
