import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto.model';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService{

  ApiRota:string  = 'produtos/';



  buscarTodosOsProdutos(): Observable<Produto[]> {
    console.log('Buscando todos os produtos:', );
    return this.httpClient.get<Produto[]>(this.apiUrl + this.ApiRota);
  }

  buscarProdutoPeloId(id: number): Observable<Produto> {
    console.log(`Buscando produto específico com ID: ${id}`);
    return this.httpClient.get<Produto>(this.apiUrl + this.ApiRota +  'id/' + id);
  }

  buscarProdutoPeloCodigo(codigo: string): Observable<Produto> {

    return this.httpClient.get<Produto>(this.apiUrl + this.ApiRota + 'codigo/' + codigo);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    console.log(`Editando produto com ID: ${produto.id}`);
    return this.httpClient.put<Produto>(this.apiUrl + this.ApiRota + produto.id, produto, this.httpOptions);
  }

  cadastrarProduto(produto: Produto): Observable<Produto> {
    console.log('Cadastrando produto:', produto);
    return this.httpClient.post<Produto>(this.apiUrl + this.ApiRota , produto, this.httpOptions);
  }

  retornaProximoId(): Observable<number>{
    return this.httpClient.get<number>(this.apiUrl + this.ApiRota  + 'retornaProximoId');

  }
}
