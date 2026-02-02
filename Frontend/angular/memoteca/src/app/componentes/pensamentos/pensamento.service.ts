import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPensamento } from './infoPensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient){}

  listar(): Observable<InfoPensamento[]>{
    return this.http.get<InfoPensamento[]>(this.API);
  }

  criar(pensamento: InfoPensamento): Observable<InfoPensamento>{
    return this.http.post<InfoPensamento>(this.API, pensamento);
  }

  editarPensamento(pensamento: InfoPensamento): Observable<InfoPensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<InfoPensamento>(url, pensamento);
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
