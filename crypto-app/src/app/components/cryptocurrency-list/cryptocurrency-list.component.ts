import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyQuote } from 'src/app/models/currency-quote';
import { FinancialModelingPrepService } from 'src/app/services/financial-modeling-prep.service';

@Component({
  selector: 'app-cryptocurrency-list',
  templateUrl: './cryptocurrency-list.component.html',
  styleUrls: ['./cryptocurrency-list.component.css']
})
export class CryptocurrencyListComponent implements OnInit {

  currenciesSymbolList: string[] = ['BTCUSD', 'ETHUSD', 'ADAUSD', 'XRPUSD', 'XLMUSD', 'DOGEUSD', 'TRXUSD', 'USDTUSD', 'BNBUSD', 'LTCUSD', 'EOSUSD', 'CVCUSD'];
  currenciesList: CurrencyQuote[] = [<CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{},
    <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}, <CurrencyQuote>{}];

  constructor(
    private financialModelingPrep: FinancialModelingPrepService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCurrencyList();
  }

  getCurrencyList(): void {
    this.currenciesList = [];
   
    this.financialModelingPrep.getCurrentCurrencyValues().subscribe(result => {
      for (let i =0; i < result.length; i++){
        if (result[i].symbol === this.currenciesSymbolList[0]){
          this.currenciesList[0] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[1]){
          this.currenciesList[1] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[2]){
          this.currenciesList[2] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[3]){
          this.currenciesList[3] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[4]){
          this.currenciesList[4] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[5]){
          this.currenciesList[5] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[6]){
          this.currenciesList[6] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[7]){
          this.currenciesList[7] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[8]){
          this.currenciesList[8] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[9]){
          this.currenciesList[9] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[10]){
          this.currenciesList[10] = result[i];
        }
        else if (result[i].symbol === this.currenciesSymbolList[11]){
          this.currenciesList[11] = result[i];
        }
      }
    })
  }

}
