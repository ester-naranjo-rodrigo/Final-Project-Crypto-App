import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  currenciesSymbolList: string[] = ['EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'HKD', 'NZD'];
  coin: string = '';
  quantity!: number;
  flag: boolean = false;
  coin2: string = '';
  quantity2!: number;
  flag2: boolean = false;

  exchangeList: string[] = ['EUR/USD', 'JPY/USD', 'GBP/USD', 'AUD/USD', 'CAD/USD', 'CHF/USD', 'HKD/USD', 'NZD/USD'];
  exchangeToUSD: number[] = [0,0,0,0,0,0,0,0];
  exchangeFromUSD: number[] = [0,0,0,0,0,0,0,0];
  result1: number = 0;
  result2: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private exchangeService: ExchangeService
  ) { }

  ngOnInit(): void {
    this.getExchange();
    
  }

  getExchange(): void {
    this.exchangeService.getExchange().subscribe(result => {
      for(let i = 0; i < result.length; i++){
        
        if (result[i].name === this.exchangeList[0]){
          this.exchangeToUSD[0] = result[i].price;
          this.exchangeFromUSD[0] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[1]){
          this.exchangeToUSD[1] = (result[i].price);
          this.exchangeFromUSD[1] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[2]){
          this.exchangeToUSD[2] = (result[i].price);
          this.exchangeFromUSD[2] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[3]){
          this.exchangeToUSD[3] = (result[i].price);
          this.exchangeFromUSD[3] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[4]){
          this.exchangeToUSD[4] = (result[i].price);
          this.exchangeFromUSD[4] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[5]){
          this.exchangeToUSD[5] = (result[i].price);
          this.exchangeFromUSD[5] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[6]){
          this.exchangeToUSD[6] = (result[i].price);
          this.exchangeFromUSD[6] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[7]){
          this.exchangeToUSD[7] = (result[i].price);
          this.exchangeFromUSD[7] = 1/result[i].price;
        }
        else if (result[i].name === this.exchangeList[8]){
          this.exchangeToUSD[8] = (result[i].price);
          this.exchangeFromUSD[8] = 1/result[i].price;
        }
      }
      console.log(this.exchangeToUSD);
      console.log(this.exchangeFromUSD);
    })
  }

  convert(quantity: number, coin: string){
    if(quantity!=0 && coin!=''){
      for(let i = 0; i<this.currenciesSymbolList.length; i++){
        if (coin === this.currenciesSymbolList[i]){
          this.result1 = quantity * this.exchangeToUSD[i];
        }
      }
      this.flag = true;
    }
    
  }

  clear(){
    this.quantity = 0;
    this.coin = '';
  }

  convert2(quantity2: number, coin2: string){
    if(quantity2!=0 || quantity2!=null && coin2!=''){
      for(let i = 0; i<this.currenciesSymbolList.length; i++){
        if (coin2 === this.currenciesSymbolList[i]){
          this.result2 = quantity2 * this.exchangeFromUSD[i];
        }
      }
      this.flag2 = true;
    }
    
  }

  clear2(){
    this.quantity2 = 0;
    this.coin2 = '';
  }

}
