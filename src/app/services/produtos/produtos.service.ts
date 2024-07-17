import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) {}

  apiUrl = 'http://localhost:8000/produtos';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };
  

  
  buscarTodosOsProdutos():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.apiUrl); 
  }

  buscarProdutoEspecifico(id:number):Observable<Produto>{
    return this.httpClient.get<Produto>(this.apiUrl + '/' + id)
  }

}
