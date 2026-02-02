import { Component, OnInit } from '@angular/core';
import { InfoPensamento } from '../infoPensamento';
import { FormsModule } from '@angular/forms';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-editar-pensamento',
  imports: [
    FormsModule
  ],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento implements OnInit{

  pensamento: InfoPensamento ={
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  editarPensamento(){
    this.service.editarPensamento(this.pensamento).subscribe(() =>{
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}
