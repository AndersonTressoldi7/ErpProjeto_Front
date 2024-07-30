import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

 constructor(public httpClient: HttpClient) {}
 public  apiUrl: string = 'http://localhost:8000/api/';

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

}
