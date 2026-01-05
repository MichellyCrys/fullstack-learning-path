import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento implements OnInit{

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Michelly',
    modelo:'modelo2'
  }

  constructor(){
  }

  ngOnInit(): void {
  }

}
