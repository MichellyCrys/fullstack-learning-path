import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Pensamento } from '../pensamento/pensamento';
import { CommonModule } from '@angular/common';
import { InfoPensamento } from '../infoPensamento';
import { PensamentoService } from '../pensamento.service';
import { BotaoCarregarMais } from "./botao-carregar-mais/botao-carregar-mais";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    Pensamento,
    CommonModule,
    BotaoCarregarMais,
    FormsModule
],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit {

  listaPensamentos: InfoPensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  readonly LIMITE: number = 6;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: InfoPensamento[] = [];
  titulo: string = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
      if (listaPensamentos.length < this.LIMITE) {
        this.haMaisPensamentos = false;
      }
    });
  }

  carregarMaisPensamentos() {
    if (!this.haMaisPensamentos) return;

    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaNovosPensamentos => {
        if (listaNovosPensamentos.length) {
          this.listaPensamentos.push(...listaNovosPensamentos);
        }
        if (listaNovosPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamento() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  recarregarComponente(){
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listarFavoritos(){
    this.titulo = 'Meus favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listarPensamentosFavoritos=> {
        this.listaPensamentos = listarPensamentosFavoritos
        this.listaFavoritos = listarPensamentosFavoritos
      })
  }
}
