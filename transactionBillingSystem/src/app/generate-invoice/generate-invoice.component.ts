import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-generate-invoice',
    templateUrl: './generate-invoice.component.html',
    styleUrls: ['./generate-invoice.component.css']
})
export class GenerateInvoiceComponent implements OnInit {

    invoiceDetails = {
        merchantName: 'Amazon',
        merchantAccountNumber: '111000',
        invoiceDate: '20 May 2020 12:23:00',
        taxInvoiceNumber: 'txn12345',
        transactionSummaryDetails: [
            {
                transactionId: 'txn1234',
                transactionType: 'refund',
                cardScheme: 'visa',
                cardType: 'Credit',
                amount: '1200',
                currency: 'GBP',
                transactionStatus: 'Success',
                panNumber: 'kjvjhvl',
                transactionDate: '29 May 2020'
            },
            {
                transactionId: 'txn1234',
                transactionType: 'refund',
                cardScheme: 'visa',
                cardType: 'Credit',
                amount: '1200',
                currency: 'GBP',
                transactionStatus: 'Success',
                panNumber: 'kjvjhvl',
                transactionDate: '29 May 2020'
            },
            {
                transactionId: 'txn1234',
                transactionType: 'refund',
                cardScheme: 'visa',
                cardType: 'Credit',
                amount: '1200',
                currency: 'GBP',
                transactionStatus: 'Success',
                panNumber: 'kjvjhvl',
                transactionDate: '29 May 2020'
            },
            {
                transactionId: 'txn1234',
                transactionType: 'refund',
                cardScheme: 'visa',
                cardType: 'Credit',
                amount: '1200',
                currency: 'GBP',
                transactionStatus: 'Success',
                panNumber: 'kjvjhvl',
                transactionDate: '29 May 2020'
            },
            {
                transactionId: 'txn1234',
                transactionType: 'refund',
                cardScheme: 'visa',
                cardType: 'Credit',
                amount: '1200',
                currency: 'GBP',
                transactionStatus: 'Success',
                panNumber: 'kjvjhvl',
                transactionDate: '29 May 2020'
            },
            {
                transactionId: 'txn1234',
                transactionType: 'refund',
                cardScheme: 'visa',
                cardType: 'Credit',
                amount: '1200',
                currency: 'GBP',
                transactionStatus: 'Success',
                panNumber: 'kjvjhvl',
                transactionDate: '29 May 2020'
            }
        ],
        subscriptionDetails: [
            {
                subscriptionName: 'Scheme 1',
                number: 1,
                currency: 'GBP',
                amount: '1223'
            },
            {
                subscriptionName: 'Payments',
                number: 1,
                currency: 'GBP',
                amount: '1223'
            },
            {
                subscriptionName: 'Charge backs',
                number: 1,
                currency: 'GBP',
                amount: '1223'
            },
            {
                subscriptionName: 'Refunds',
                number: 1,
                currency: 'GBP',
                amount: '1223'
            }
        ]
    };
    constructor() { }

    ngOnInit(): void {
    }

}
