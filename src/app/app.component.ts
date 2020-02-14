import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSharingService } from './data-sharing.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'poc';
    loggedInUser: string;
    isUserLoggedIn: boolean
    constructor(private router: Router, private dataSharingService: DataSharingService) {

        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
        this.dataSharingService.isUserLoggedIn.subscribe(value => {
            this.loggedInUser = localStorage.getItem('loggedInUser');
            this.isUserLoggedIn = value;
        });
    }

    ngOnInit(): void {
        this.loggedInUser = localStorage.getItem('loggedInUser');
    }


    public logout() {
        console.log("calling logout");
        localStorage.removeItem('loggedInUser');
        this.dataSharingService.isUserLoggedIn.next(false);
        this.loginNav();
    }

    public loginNav() {
        this.router.navigate(['/login']);
    }

    public home() {
        this.router.navigate(['/home']);
    }
    public addTask() {
        this.router.navigate(['/task-tracking']);
    }

    public tasks() {
        this.router.navigate(['/tracking-list']);
    }
}

