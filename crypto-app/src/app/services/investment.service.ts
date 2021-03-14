import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investment } from '../models/investment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  url: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getInvestment(user: number): Observable<Investment[]> {
    this.url = 'http://localhost:8081/investment/' + user;
    return this.http.get<Investment[]>(this.url);
  }

  storeInvestment(investment: Investment): void {
    this.http.post('http://localhost:8081/investment', this.body_store(investment)).subscribe(data=>
    console.log('Post new User'));
  }

   body_store(investment: Investment): any {
    let investmentBody: any = {
      user: investment.user,
      quantity: investment.quantity,
      coin: investment.coin,
      dateInvestment: investment.dateInvestment
    }
    return investmentBody;
  }

  updateInvestment(investment: Investment): void {
    this.http.put('http://localhost:8081/investment', this.body_put(investment)).subscribe(data=>
    console.log('Update Investment'));
  }

  body_put(investment: Investment): any {
    let investmentBody: any = {
      id: investment.id,
      quantity: investment.quantity,
      coin: investment.coin,
      dateInvestment: investment.dateInvestment
    }
    return investmentBody;
  }

  deleteInvestment(id: number): void {
    console.log(id)
    this.http.delete('http://localhost:8081/investment/' + id).subscribe(data=>
    console.log('Delete Investment with username = '+id));
  }

}

export interface InvestmentDB {
  "id": number,
  "user": string,
  "quantity": number,
  "coin": string,
  "dateInvestment": Date
}