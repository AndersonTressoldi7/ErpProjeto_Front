import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { Cidade } from '../../models/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadesService extends BaseService{

  private apiRota: string = 'cidades';

  buscarTodasAsCidades(): Observable<Cidade[]> {
    console.log('Buscando todas as cidades');
    return this.httpClient.get<Cidade[]>(this.apiUrl + this.apiRota);
  }

}
