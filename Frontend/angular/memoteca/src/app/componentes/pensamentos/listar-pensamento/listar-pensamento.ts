import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Pensamento } from '../pensamento/pensamento';
import { CommonModule } from '@angular/common';
import { InfoPensamento } from '../infoPensamento';
import { PensamentoService } from '../pensamento.service';
import { BotaoCarregarMais } from "./botao-carregar-mais/botao-carregar-mais";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    Pensamento,
    CommonModule,
    BotaoCarregarMais
],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit {

  listaPensamentos: InfoPensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  readonly LIMITE: number = 6;

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
      if (listaPensamentos.length < this.LIMITE) {
        this.haMaisPensamentos = false;
      }
    });
  }

  carregarMaisPensamentos() {
    if (!this.haMaisPensamentos) return;

    this.service.listar(++this.paginaAtual)
      .subscribe(listaNovosPensamentos => {
        if (listaNovosPensamentos.length) {
          this.listaPensamentos.push(...listaNovosPensamentos);
        }
        if (listaNovosPensamentos.length < this.LIMITE) {
          this.haMaisPensamentos = false;
        }
      });
  }
}
