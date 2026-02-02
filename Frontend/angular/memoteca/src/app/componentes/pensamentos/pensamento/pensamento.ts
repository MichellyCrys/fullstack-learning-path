import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPensamento } from './../infoPensamento';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento implements OnInit{

  @Input() pensamento: InfoPensamento = {
    id: '',
    conteudo: 'I love Angular',
    autoria: 'Michelly',
    modelo:'modelo2'
  }

  constructor(){
  }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
