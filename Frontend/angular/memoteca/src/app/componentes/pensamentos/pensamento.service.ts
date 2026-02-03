import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPensamento } from './infoPensamento';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient){}

  listar(pagina: number, filtro: string): Observable<InfoPensamento[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
      .set("_page", pagina.toString())
      .set("_limit", itensPorPagina.toString());

    if (filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    return this.http.get<any>(this.API, { params })
  }

  criar(pensamento: InfoPensamento): Observable<InfoPensamento>{
    return this.http.post<InfoPensamento>(this.API, pensamento);
  }

  editar(pensamento: InfoPensamento): Observable<InfoPensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<InfoPensamento>(url, pensamento);
  }

  mudarFavorito(pensamento: InfoPensamento): Observable<InfoPensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: string): Observable<InfoPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<InfoPensamento>(url);
  }

  buscarPorId(id: string): Observable<InfoPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<InfoPensamento>(url);
  }

}
