import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private httpClient: HttpClient) {}

  apiUrl = 'http://localhost:8000/api/pessoas/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  

  buscarTodasAsPessoas(): Observable<Pessoa[]> {
    console.log('Buscando todos as pessoas');
    return this.httpClient.get<Pessoa[]>(this.apiUrl);
  }

  buscarPessoaPeloId(id: number): Observable<Pessoa> {
    console.log(`Buscando produto específico com ID: ${id}`);
    return this.httpClient.get<Pessoa>(this.apiUrl + 'id/' + id);
  }

  buscarPessoaeloCodigo(codigo: string): Observable<Pessoa> {
    console.log(`Buscando produto específico com ID: ${codigo}`);
    return this.httpClient.get<Pessoa>(this.apiUrl + 'codigo/' + codigo);
  }

  editarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    console.log(`Editando produto com ID: ${pessoa.id}`);
    return this.httpClient.put<Pessoa>(this.apiUrl + pessoa.id, pessoa, this.httpOptions);
  }

  cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    console.log('Cadastrando produto:', pessoa);
    return this.httpClient.post<Pessoa>(this.apiUrl, pessoa, this.httpOptions);
  }

  retornaProximoId(): Observable<number>{
    return this.httpClient.get<number>(this.apiUrl + 'retornaProximoId');

  }
}
