import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from "highcharts-angular";
import { HighchartsChartComponent } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrencyListComponent } from './components/cryptocurrency-list/cryptocurrency-list.component';
import { CryptocurrencyHistoricalComponent } from './components/cryptocurrency-historical/cryptocurrency-historical.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { FormsModule } from '@angular/forms';
import { PortfolioUserDetailsComponent } from './components/portfolio-user-details/portfolio-user-details.component';
import { PortfolioInvestmentDetailsComponent } from './components/portfolio-investment-details/portfolio-investment-details.component';
import { PortfolioChartComponent } from './components/portfolio-chart/portfolio-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyListComponent,
    CryptocurrencyHistoricalComponent,
    NavBarComponent,
    PageNotFoundComponent,
    SignUpComponent,
    RegisterComponent,
    PortfolioComponent,
    ExchangeComponent,
    PortfolioUserDetailsComponent,
    PortfolioInvestmentDetailsComponent,
    PortfolioChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
