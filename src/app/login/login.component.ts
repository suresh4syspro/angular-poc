import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from "../models/user";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSharingService } from 'src/app/data-sharing.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public user: User
    loginForm = new FormGroup({
        username: new FormControl(''),
        passwrod: new FormControl('')
    })

    constructor(private apiService: ApiService, private router: Router, private dataSharingService: DataSharingService) { }

    ngOnInit(): void {
    }

    onSubmit() {
        this.apiService.findUser(this.loginForm.value.username, this.loginForm.value.passwrod).subscribe(result => {
            if (result[0] != null) {
                localStorage.setItem('loggedInUser', result[0].username);
                this.dataSharingService.isUserLoggedIn.next(true);
                this.gotoTaskPage()
            }
        });
    }

    gotoTaskPage() {
        this.router.navigate(['/task-tracking']);
    }




}
