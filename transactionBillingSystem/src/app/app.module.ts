import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MerchantSummaryComponent } from './merchant-summary/merchant-summary.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantContractComponent } from './merchant-contract/merchant-contract.component';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [  
  {path: '', redirectTo: '/merchantSumary', pathMatch: 'full'},
  { path: 'merchantSumary', component: MerchantSummaryComponent },  
  { path: 'merchantDashboard', component: MerchantDashboardComponent },  
  { path: 'merchantContract', component: MerchantContractComponent },  
];  

@NgModule({
  declarations: [
    AppComponent,
    MerchantSummaryComponent,
    MerchantDashboardComponent,
    MerchantContractComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
