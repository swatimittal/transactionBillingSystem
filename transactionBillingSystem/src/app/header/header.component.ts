import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    /** input for showing page based title */
    @Input() pageTitle: string;
    @Input() backPage: string;

    constructor(public router: Router) {
        this.backPage = '';
        this.pageTitle = 'Merchant List';
    }

    ngOnInit() {
        console.log(this.backPage);
    }

    /**
     * method to redirect to given page name
     * @param page page name
     */
    redirect() {
        this.router.navigate(['./' + this.backPage]);
    }
}
