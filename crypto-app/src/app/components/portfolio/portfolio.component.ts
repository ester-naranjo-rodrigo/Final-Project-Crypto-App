import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { never } from 'rxjs';
import { Investment } from 'src/app/models/investment';
import { User } from 'src/app/models/user';
import { InvestmentService } from 'src/app/services/investment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  user: User = <User>{};
  investments: Investment [] = [];
  quantity!: number;
  coin: string = '';
  dateInvestment!: Date;
  currenciesSymbolList: string[] = ['BTCUSD', 'ETHUSD', 'ADAUSD', 'XRPUSD', 'XLMUSD', 'DOGEUSD', 'TRXUSD', 'USDTUSD', 'BNBUSD', 'LTCUSD', 'EOSUSD', 'CVCUSD'];
  existCoin: boolean = true;
  investmentCoins: string[] =[];
  investmentCoinsUnique: string[] =[];
  date: Date = new Date();
  mindate: string = '';
  maxdate: string = '';
  month: string = '';
  day: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private investmentService: InvestmentService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getInvestments();
    setTimeout(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
      this.getInvestments();
      this.getUser();
      }, 1000);
  }

  getDate(): void {
    if(this.date.getDate()<10){
      this.day = "0"+this.date.getDate();
    }
    else{
      this.day = ""+this.date.getDate();
    }
    if((this.date.getMonth()+1)<10){
      this.month = "0"+(this.date.getMonth()+1);
    }
    else{
      this.month = ""+(this.date.getMonth()+1);
    }
    this.maxdate = this.date.getFullYear() + "-" + this.month + "-" + this.day;
    this.mindate = (this.date.getFullYear()-5) + "-" + this.month + "-" + this.day;
  }

  getUser(): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.userService.getUser(username).subscribe(result => {
      this.user = new User(result.id, result.name, result.username, result.password, result.country);
    })
  }

  editUser(): void{
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.router.navigate(['portfolio/'+username+'/editUser']);
  }

  deleteUser(): void{
    this.investments = [];
    this.investmentCoins = [];
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.userService.getUser(username).subscribe(result => {
      this.user = new User(result.id, result.name, result.username, result.password, result.country);
      this.investmentService.getInvestment(this.user.id).subscribe(resultinv => {
        for (let i = 0; i< resultinv.length; i++){
          this.investmentService.deleteInvestment(resultinv[i].id);
        }
      })
    })
    this.userService.deleteUser(username);
    this.router.navigate(['/']);
  }

  getInvestments(): void {
    this.investments = [];
    this.investmentCoins = [];
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.userService.getUser(username).subscribe(result => {
      this.user = new User(result.id, result.name, result.username, result.password, result.country);
      this.investmentService.getInvestment(this.user.id).subscribe(result => {
        console.log(result)
        for (let i = 0; i< result.length; i++){
        this.investments.push(new Investment(result[i].id, result[i].user, result[i].quantity, result[i].coin, result[i].dateInvestment));
        this.investmentCoins.push(result[i].coin);
        }

        this.investmentCoinsUnique = [];
        this.investmentCoinsUnique = [this.investmentCoins[0]];
        for (var i=0; i<this.investmentCoins.length; i++) {
        if (this.investmentCoinsUnique.indexOf(this.investmentCoins[i]) == -1){ this.investmentCoinsUnique.push(this.investmentCoins[i]);}
        }
        console.log(this.investmentCoinsUnique);
      })
    })
    
  }

  showChart(investmentCoin: string): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.router.navigate(['portfolio/'+username+'/showChart/'+investmentCoin]);
  }
  
  editInvestment(investmentId: number): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.router.navigate(['portfolio/'+username+'/editInvestment/'+investmentId]);
  }
    
  deleteInvestment(investmentId: number): void {
    this.investmentService.deleteInvestment(investmentId);
    this.ngOnInit();
  }

  createInvestment(quantity: number, coin: string, dateInvestment: Date): void {
    this.investments = [];
    this.investmentCoins = [];
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.userService.getUser(username).subscribe(result => {
      this.user = new User(result.id, result.name, result.username, result.password, result.country);
      this.investmentService.getInvestment(this.user.id).subscribe(result => {
        console.log(result)
        this.investmentService.storeInvestment(new Investment(0, this.user.id, quantity, coin, dateInvestment));
      })
    })
    setTimeout(() => {  this.getInvestments(); }, 500);
    this.quantity = 0;
    this.coin = '';
    this.dateInvestment = new Date;
  }

  exist(currency: string): boolean{
    for (let j=0; j<this.currenciesSymbolList.length; j++){
      if (currency === this.currenciesSymbolList[j]){
        this.existCoin = true;
      }
      else{
        this.existCoin = false;
      }
    }
    return this.existCoin;
  }

}