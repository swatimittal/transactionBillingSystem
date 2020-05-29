import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-generate-invoice',
    templateUrl: './generate-invoice.component.html',
    styleUrls: ['./generate-invoice.component.css']
})
export class GenerateInvoiceComponent implements OnInit {

    invoiceDetails = {
        merchant_id: '101',
        merchantName: 'Amazon',
        accountNumber: '111000',
        invoiceDate: '20 May 2020 12:23:00',
        invoiceNumber: 'txn12345',
        schemeId: 101,
        schemeCharges: 0,
        subTotal: '1122',
        noOfPayments: 10,
        noOfPayouts: 10,
        noOfRefunds: 10,
        noOfCancels: 10,
        vatInPercentage: '232',
        totalBillAmount: '56478',
        TransactionDetails: [
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
                number: '1',
                currency: 'GBP',
                amount: '1223'
            },
            {
                subscriptionName: 'Payments',
                number: '1',
                currency: 'GBP',
                amount: '1223'
            },
            {
                subscriptionName: 'Charge backs',
                number: '1',
                currency: 'GBP',
                amount: '1223'
            },
            {
                subscriptionName: 'Refunds',
                number: '1',
                currency: 'GBP',
                amount: '1223'
            }
        ]
    };
    constructor() { }

    ngOnInit(): void {
    }
}
