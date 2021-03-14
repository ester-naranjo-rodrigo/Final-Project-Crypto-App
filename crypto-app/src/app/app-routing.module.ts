import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptocurrencyHistoricalComponent } from './components/cryptocurrency-historical/cryptocurrency-historical.component';
import { CryptocurrencyListComponent } from './components/cryptocurrency-list/cryptocurrency-list.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioChartComponent } from './components/portfolio-chart/portfolio-chart.component';
import { PortfolioInvestmentDetailsComponent } from './components/portfolio-investment-details/portfolio-investment-details.component';
import { PortfolioUserDetailsComponent } from './components/portfolio-user-details/portfolio-user-details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: CryptocurrencyListComponent
  },
  {
    path: 'historical/:currency',
    component: CryptocurrencyHistoricalComponent
  },
  {
    path: 'portfolio/signup',
    component: SignUpComponent
  },
  {
    path: 'portfolio/register',
    component: RegisterComponent
  },
  {
    path: 'portfolio/:username',
    component: PortfolioComponent
  },
  {
    path: 'portfolio/:username/editUser',
    component: PortfolioUserDetailsComponent
  },
  {
    path: 'portfolio/:username/editInvestment/:investmentId',
    component: PortfolioInvestmentDetailsComponent
  },
  {
    path: 'portfolio/:username/showChart/:currency',
    component: PortfolioChartComponent
  },
  {
    path: 'exchange',
    component: ExchangeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
