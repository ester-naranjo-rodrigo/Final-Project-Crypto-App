import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialModelingPrepService } from 'src/app/services/financial-modeling-prep.service';
import * as Highcharts from "highcharts/highstock";

@Component({
  selector: 'app-cryptocurrency-historical',
  templateUrl: './cryptocurrency-historical.component.html',
  styleUrls: ['./cryptocurrency-historical.component.css']
})
export class CryptocurrencyHistoricalComponent implements OnInit {

  public resultado:any;
  currencyName: string = '';
  Highcharts = Highcharts;
  ohlc: number[][] = [];
  volume: number[][] = [];
  data: number[][] = [];

  constructor(
    private financialModelingPrep: FinancialModelingPrepService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  goHome(): void{
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.data = [];
    const currency: string = String(this.activatedRoute.snapshot.paramMap.get('currency'));
      this.financialModelingPrep.getCurrencyHistorical(currency).subscribe(result => {
        this.resultado = result;
        this.currencyName = this.resultado.symbol;
        for (let i = 0; i <this.resultado.historical.length; i++) {
          let datos = [];
          datos.push(Date.parse(this.resultado.historical[i].date), this.resultado.historical[i].open, this.resultado.historical[i].high, this.resultado.historical[i].low, 
          this.resultado.historical[i].close, this.resultado.historical[i].volume);
          this.data.push(datos);
          this.data.sort();
        }
        
        for (let i = 0; i < this.data.length; i++) {
          
          this.ohlc.push([
            this.data[i][0], // the date
            this.data[i][1], // open
            this.data[i][2], // high
            this.data[i][3], // low
            this.data[i][4] // close
          ]);
    
          this.volume.push([
            this.data[i][0], // the date
            this.data[i][5] // the volume
          ]);
        }
        
        let chart = Highcharts.stockChart("container",{
          plotOptions: {
            series: {
              turboThreshold: this.data.length
            }
          },
              yAxis: [
                {
                  labels: {
                    align: "left"
                  },
                  height: "80%",
                  resize: {
                    enabled: true
                  }
                },
                {
                  labels: {
                    align: "left"
                  },
                  top: "80%",
                  height: "20%",
                  offset: 0
                }
              ],
              tooltip: {
                shape: "square",
                headerShape: "callout",
                borderWidth: 0,
                shadow: true,
                
              },
              series: [
                {
                  type: "candlestick",
                  id: this.currencyName+"-ohlc",
                  name: this.currencyName+" Stock Price",
                  data: this.ohlc,
                },
                {
                  type: "column",
                  id: this.currencyName+"-volume",
                  name: this.currencyName+" Volume",
                  data: this.volume,
                  yAxis: 1,
                  
                }
              ],
              responsive: {
                rules: [
                  {
                    condition: {
                      maxWidth: 800
                    },
                    chartOptions: {
                      rangeSelector: {
                        inputEnabled: true
                      }
                    }
                  }
                ]
              },
            });
      })
  }
}   

 
