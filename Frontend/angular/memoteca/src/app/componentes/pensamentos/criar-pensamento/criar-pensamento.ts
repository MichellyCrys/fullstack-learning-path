import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { InfoPensamento } from '../infoPensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento implements OnInit{
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() =>{
        this.router.navigate(['/listarPensamento']);
      })
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento']);
  }

}
