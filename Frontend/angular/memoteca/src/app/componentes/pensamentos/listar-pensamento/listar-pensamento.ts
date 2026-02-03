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
  readonly LIMITE_POR_PAGINA: number = 6;

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
      if (listaPensamentos.length < this.LIMITE_POR_PAGINA) {
        this.haMaisPensamentos = false;
      }
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if (listaPensamentos.length < this.LIMITE_POR_PAGINA) {
          this.haMaisPensamentos = false;
        }
      })
  }
}
