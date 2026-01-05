import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pensamento } from '../pensamento/pensamento';
import { CommonModule } from '@angular/common';
import { InfoPensamento } from '../infoPensamento';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    Pensamento,
    CommonModule,
],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{

  listaPensamentos: InfoPensamento[] = [];

  constructor(){
  }

  ngOnInit(): void {
  }
}
