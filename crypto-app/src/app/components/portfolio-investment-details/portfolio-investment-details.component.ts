import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/models/investment';
import { User } from 'src/app/models/user';
import { InvestmentService } from 'src/app/services/investment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio-investment-details',
  templateUrl: './portfolio-investment-details.component.html',
  styleUrls: ['./portfolio-investment-details.component.css']
})
export class PortfolioInvestmentDetailsComponent implements OnInit {

  user: User = <User>{};
  id: number = 0;
  userId: number = 0;
  quantity: number = 0;
  coin: string = '';
  dateInvestment: Date = new Date();
  currenciesSymbolList: string[] = ['BTCUSD', 'ETHUSD', 'ADAUSD', 'XRPUSD', 'XLMUSD', 'DOGEUSD', 'TRXUSD', 'USDTUSD', 'BNBUSD', 'LTCUSD', 'EOSUSD', 'CVCUSD'];
  username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
  url: string = '/portfolio/'+this.username;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private investmentService: InvestmentService
  ) { }

  ngOnInit(): void {
    this.getInvestments();
  }

  getInvestments(): void {
    
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    const investmentId: number = Number(this.activatedRoute.snapshot.paramMap.get('investmentId'));
    this.userService.getUser(username).subscribe(result => {
      this.user = new User(result.id, result.name, result.username, result.password, result.country);
      this.investmentService.getInvestment(this.user.id).subscribe(result => {
        console.log(result)
        for (let i = 0; i< result.length; i++){
          if (result[i].id === investmentId){
            this.id = result[i].id;
            this.userId = result[i].user;
            this.quantity = result[i].quantity;
            this.coin = result[i].coin;
            this.dateInvestment = result[i].dateInvestment;
          }
        }
      })
    })
    
  }

  updateInvestment(quantity: number, coin: string, dateInvestment: Date): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    const investmentId: number = Number(this.activatedRoute.snapshot.paramMap.get('investmentId'));
    this.investmentService.updateInvestment(new Investment(investmentId, 0, quantity, coin, dateInvestment));
    console.log(coin);
    console.log(quantity);
    console.log(dateInvestment);
    this.router.navigate(['portfolio/'+username]);
    
  }

  goBack(): void {
    const username: string = String(this.activatedRoute.snapshot.paramMap.get('username'));
    this.router.navigate(['portfolio/'+username]);
  }

}


