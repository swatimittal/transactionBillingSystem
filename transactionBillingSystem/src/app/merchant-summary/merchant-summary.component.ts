
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-merchant-summary',
  templateUrl: './merchant-summary.component.html',
  styleUrls: ['./merchant-summary.component.css']
})
export class MerchantSummaryComponent implements OnInit {

  public data = [{
    name: "test",
    country: "india",
    account_no: "123456789",
    total_transaction: "123"
  },
  {
    name: "test",
    country: "india",
    account_no: "123456789",
    total_transaction: "123"
  },
  {
    name: "test",
    country: "india",
    account_no: "123456789",
    total_transaction: "123"
  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToMerchantDashboard= function() {
    this.router.navigateByUrl('/merchantDashboard');
  }

}
