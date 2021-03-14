import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/models/investment';
import { User } from 'src/app/models/user';
import { FinancialModelingPrepService } from 'src/app/services/financial-modeling-prep.service';
import { InvestmentService } from 'src/app/services/investment.service';
import { UserService } from 'src/app/services/user.service';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);

@Component({
  selector: 'app-portfolio-chart',
  templateUrl: './portfolio-chart.component.html',
  styleUrls: ['./portfolio-chart.component.css']
})
export class PortfolioChartComponent implements OnInit {

  user: User = <User>{};
  investments: Investment [] = [];
  quantity!: number;
  coin: string = '';
  dateInvestment!: Date;
  sortInvestments: Investment [] = [];
  investmentsdef: Investment [] = [];
  totalDays: number = 0;
  diffDays: number[] = [];
  historicQuotes: number[] = [];
  historicQuotesSorted: number[] = [];
  historicDates: string[] = [];
  graphQuotes: number[] = [];
  graphDates: string[] = [];
  investmentAcum: number[] = [];
  acumValue: number = 0;
  Highcharts = Highcharts;
  year: number = 0;
  month: number = 0;
  day: number = 0;
  currency: string = String(this.activatedRoute.snapshot.paramMap.get('currency'));
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private investmentService: InvestmentService,
    private financialModelingPrepService: FinancialModelingPrepService
  ) { }

  ngOnInit(): void {
    this.getInvestments();
    //this.getDays();
  }

  getInvestments(): void {
    this.investments = [];
    this.sortInvestments = [];
    this.investmentsdef = [];
    this.diffDays = [];
    this.acumValue = 0;
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    const currency: string = String(this.activatedRoute.snapshot.paramMap.get('currency'));
    this.userService.getUser(username).subscribe(result => {
      this.user = new User(result.id, result.name, result.username, result.password, result.country);
      this.investmentService.getInvestment(this.user.id).subscribe(result => {
        for (let i = 0; i< result.length; i++){
          if(result[i].coin === currency){
            this.investments.push(new Investment(result[i].id, result[i].user, result[i].quantity, result[i].coin, result[i].dateInvestment));
          }
        }
        this.sortInvestments = this.investments.sort((a, b) => {
          return <any>new Date(b.dateInvestment) - <any>new Date(a.dateInvestment);
        });
        this.investmentsdef = this.sortInvestments.reverse();
        for(let i = 0; i<this.investmentsdef.length; i++){
          this.acumValue += this.investmentsdef[i].quantity;
          this.investmentAcum.push(this.acumValue);
        }
        console.log(this.investmentAcum);
        var date1 = new Date(this.investmentsdef[0].dateInvestment);
        var date2 = new Date();
        var diff = Math.abs(date1.getTime() - date2.getTime());
        this.totalDays = Math.ceil(diff / (1000 * 3600 * 24)); 
        console.log(this.totalDays);
        for (let i =0; i<this.investmentsdef.length; i++){
          var date1= new Date(this.investmentsdef[i].dateInvestment);
          var date2 = new Date();
          var diff = Math.abs(date1.getTime() - date2.getTime());
          this.diffDays.push(Math.ceil(diff / (1000 * 3600 * 24))); 
        }
        console.log(this.diffDays);

        this.financialModelingPrepService.getCurrencyHistorical(currency).subscribe(result => {
          for(let i=0; i<this.totalDays; i++){
            this.historicQuotes.push(result.historical[i].close);
            this.historicDates.push(result.historical[i].date);
          }
          this.historicQuotesSorted = this.historicQuotes.reverse();
          this.graphDates = this.historicDates.reverse();
          
          for (let j = 0; j < (this.investmentsdef.length-1); j++){
            for (let i = (this.historicQuotesSorted.length - this.diffDays[j]); i < (this.historicQuotesSorted.length - this.diffDays[j+1]); i++){
              this.graphQuotes.push(this.historicQuotesSorted[i] * this.investmentAcum[j]);
            }
          } 
          for (let i = (this.historicQuotesSorted.length - this.diffDays[this.diffDays.length-1]); i < (this.historicQuotesSorted.length); i++){
            this.graphQuotes.push(this.historicQuotesSorted[i] * this.investmentAcum[this.diffDays.length-1]);
          }
          console.log(this.graphQuotes);
          console.log(this.graphDates);
          this.year = new Date(this.investmentsdef[0].dateInvestment).getFullYear();
          this.month = new Date(this.investmentsdef[0].dateInvestment).getMonth();
          this.day = new Date(this.investmentsdef[0].dateInvestment).getDate();
          
          let chart = Highcharts.chart("container", {
            chart: {
              zoomType: 'x'
            },
            title: {
              text: 'Your investment progress in ' + currency
            },
            subtitle: {
              text: document.ontouchstart === undefined ?
              'Click and drag in the plot area to zoom in' :
              'Pinch the chart to zoom in'
            },
            xAxis:{
              type: 'datetime',
              minRange: 14 * 24 * 3600000 // fourteen days
            },
            yAxis: {          
               title:{
                text: 'USD'
               } 
            },
            tooltip: {
               valueSuffix:" $"
            },
            plotOptions : {
               area: {
                  marker: {
                     radius: 2
                  },
                  lineWidth: 1,
                  states: {
                     hover: {
                        lineWidth: 1
                     }
                  },
                  threshold: null
               }
            },
            series:[{
               type: 'area',
               name: 'Your wallet value in USD',
               pointInterval: 24 * 3600 * 1000,
               pointStart: Date.UTC(this.year,this.month,this.day),
               data: this.graphQuotes
            }]
          });
          
          
        })
      })
    })
  }

  goBack(): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.router.navigate(['portfolio/'+username]);
  }


}
