import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) {}

  apiUrl = 'http://localhost:8000/api/produtos/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  buscarTodosOsProdutos(): Observable<Produto[]> {
    console.log('Buscando todos os produtos');
    return this.httpClient.get<Produto[]>(this.apiUrl);
  }

  buscarProdutoPeloId(id: number): Observable<Produto> {
    console.log(`Buscando produto específico com ID: ${id}`);
    return this.httpClient.get<Produto>(this.apiUrl + 'id/' + id);
  }

  buscarProdutoPeloCodigo(codigo: string): Observable<Produto> {
    console.log(`Buscando produto específico com ID: ${codigo}`);
    return this.httpClient.get<Produto>(this.apiUrl + 'codigo/' + codigo);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    console.log(`Editando produto com ID: ${produto.id}`);
    return this.httpClient.put<Produto>(this.apiUrl + produto.id, produto, this.httpOptions);
  }

  cadastrarProduto(produto: Produto): Observable<Produto> {
    console.log('Cadastrando produto:', produto);
    return this.httpClient.post<Produto>(this.apiUrl, produto, this.httpOptions);
  }

  retornaProximoId(): Observable<number>{
    return this.httpClient.get<number>(this.apiUrl + 'retornaProximoId');

  }
}
