import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  imports: [],
  templateUrl: './botao-carregar-mais.html',
  styleUrl: './botao-carregar-mais.css',
})
export class BotaoCarregarMais {
  @Input() haMaisPensamentos: boolean = false;
  @Output() eventoClick = new EventEmitter<void>();

  onClick() {
    this.eventoClick.emit();
  }
}
