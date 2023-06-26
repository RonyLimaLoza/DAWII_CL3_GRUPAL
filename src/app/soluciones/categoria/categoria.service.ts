import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../marca/marca';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  listarCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("https://apimocha.com/bdnandito2/categoria");
  }
}

