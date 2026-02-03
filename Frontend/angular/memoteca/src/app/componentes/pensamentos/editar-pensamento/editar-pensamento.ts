import { Component, OnInit } from '@angular/core';
import { InfoPensamento } from '../infoPensamento';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-editar-pensamento',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento implements OnInit{

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.formulario.patchValue(pensamento);
      });
    }
  }

  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}
