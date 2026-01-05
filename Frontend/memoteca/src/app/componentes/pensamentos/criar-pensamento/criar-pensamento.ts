import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { InfoPensamento } from '../infoPensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento implements OnInit{

  pensamento: InfoPensamento ={
    conteudo:'Aprendendo Angular',
    autoria:'Dev',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ){
  }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento']);
  }

}
