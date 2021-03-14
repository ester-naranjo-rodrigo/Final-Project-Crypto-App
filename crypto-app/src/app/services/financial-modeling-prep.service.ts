import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinHistorical } from '../models/coin-historical';
import { CurrencyQuote } from '../models/currency-quote';


@Injectable({
  providedIn: 'root'
})
export class FinancialModelingPrepService {

  url: string = '';
  constructor(
    private http: HttpClient
  ) { }

  getCurrencyHistorical(currency: string): Observable<CoinHistorical> {
    this.url = 'http://localhost:8082/historical/' + currency;
    return this.http.get<CoinHistorical>(this.url);
  }

  getCurrentCurrencyValues(): Observable<CurrencyQuote[]> {
    const url = 'http://localhost:8082/quotes';
    return this.http.get<CurrencyQuote[]>(url);
  }

}
