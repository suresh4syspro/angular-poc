import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Department } from "../models/department";
import { DepartmentGroup } from "../models/department-group";
import { Role } from "../models/role";
import { RoleGroup } from "../models/role-group";


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

    public departmentGroups: DepartmentGroup[];
    public roleGroups: RoleGroup[];


    registrationForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        empid: new FormControl(''),
        mobile: new FormControl(''),
        department: new FormControl(''),
        role: new FormControl('')

    });

    constructor(private apiService: ApiService, private router: Router) {
        this.apiService.getDepartmentList().subscribe(data => { 
            this.departmentGroups = data 
        })
        this.apiService.getRoleList().subscribe(data => { 
            this.roleGroups = data 
        })
    }

    ngOnInit(): void {

    }

    onSubmit() {
        this.apiService.register(this.registrationForm.value).subscribe(result =>  this.gotoTaskPage());
      }
    
      gotoTaskPage() {
            this.router.navigate(['/task-tracking']);
      }
}
