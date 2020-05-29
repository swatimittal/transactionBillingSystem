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

    constructor(public router: Router) {
        this.pageTitle = 'Merchant List';
    }

    ngOnInit() {
    }

    /**
     * method to redirect to given page name
     * @param page page name
     */
    redirect(page) {
        this.router.navigate(['./' + page]);
    }
}
