
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-merchant-summary',
  templateUrl: './merchant-summary.component.html',
  styleUrls: ['./merchant-summary.component.css']
})
export class MerchantSummaryComponent implements OnInit {

  public data = [{
    "merchantId": 101,
    "merchantAaccountNumber": 111100,
    "merchantDescription": "Amazon",
    "merchantDomain": "ECOM",
    "currency": "GBP",
    "country": "UK",
    "insertDate": "2020-05-27 00:00:00"
  },
    {
      "merchantId": 102,
      "merchantAaccountNumber": 111101,
      "merchantDescription": "Flipkart",
      "merchantDomain": "ECOM",
      "currency": "GBP",
      "country": "UK",
      "insertDate": "2020-05-27 00:00:00"
    }, {
      "merchantId": 101,
      "merchantAaccountNumber": 111100,
      "merchantDescription": "Amazon",
      "merchantDomain": "ECOM",
      "currency": "GBP",
      "country": "UK",
      "insertDate": "2020-05-27 00:00:00"
    },
    {
      "merchantId": 102,
      "merchantAaccountNumber": 111101,
      "merchantDescription": "Flipkart",
      "merchantDomain": "ECOM",
      "currency": "GBP",
      "country": "UK",
      "insertDate": "2020-05-27 00:00:00"
    }]

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMerchantDetails().subscribe((res)=>{
      //this.apiService.getCustomers(this.apiService.nextPage).subscribe((res)=>{
        console.log(res);
      //});      
    });
  }

  transactionsToDo= function() {
    this.data.forEach(element => {
      element.merchantId += 1;
    });
  }

}
