import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from './marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient
  ) { }

  listarMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>("https://apimocha.com/bdnandito2/marca");
  }
}

