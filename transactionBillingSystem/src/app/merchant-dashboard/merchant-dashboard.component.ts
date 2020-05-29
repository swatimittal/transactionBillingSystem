import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-merchant-dashboard',
    templateUrl: './merchant-dashboard.component.html',
    styleUrls: ['./merchant-dashboard.component.css']
})
export class MerchantDashboardComponent implements OnInit {
    merchantDetails = {
        merchantName: 'Amazon',
        merchantId: 101,
        merchantAccountNumber: 111100,
        merchantDescription: 'Amazon',
        merchantDomain: 'ECOM',
        currency: 'GBP',
        country: 'UK',
        insertDate: '2020 - 05 - 27 00: 00: 00'
    };

    lineChartData: ChartDataSets[] = [
        { data: [85, 72, 78, 75, 77, 75], label: 'Transaction Dashboard' },
    ];

    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

    lineChartOptions = {
        responsive: true,
    };

    lineChartColors: Color[] = [
        {
            borderColor: 'black',
            backgroundColor: 'rgba(255,255,0,0.28)',
        },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
        // make API call
    }

    updateMerchantContract() {
        this.router.navigateByUrl('/merchantContract');
    }

    /**
     * method to fetch invoice details
     */
    generateInvoice() {
        this.router.navigateByUrl('/generateInvoice');
    }
}
