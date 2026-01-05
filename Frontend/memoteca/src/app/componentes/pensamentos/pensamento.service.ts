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

}
