import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from '../models/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  url: string = '';
  constructor(
    private http: HttpClient
  ) { }

  getExchange(): Observable<Exchange[]> {
    this.url = 'http://localhost:8083/exchange';
    return this.http.get<Exchange[]>(this.url);
  }

}
