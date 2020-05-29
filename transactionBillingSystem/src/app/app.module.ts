import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MerchantSummaryComponent } from './merchant-summary/merchant-summary.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantContractComponent } from './merchant-contract/merchant-contract.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/merchantSumary', pathMatch: 'full' },
  { path: 'merchantSumary', component: MerchantSummaryComponent },
  { path: 'merchantDashboard', component: MerchantDashboardComponent },
  { path: 'merchantContract', component: MerchantContractComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MerchantSummaryComponent,
    MerchantDashboardComponent,
    MerchantContractComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
