import { Injectable, DebugElement } from '@angular/core';
import { Task } from './models/task';
import { Department } from './models/department';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentGroup } from 'src/app/models/department-group';
import { RoleGroup } from 'src/app/models/role-group';
import { User } from 'src/app/models/user';



@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseUrl = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    getTaskList(): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl + "tasks");
    }

    getDepartmentList(): Observable<DepartmentGroup[]> {
        return this.http.get<DepartmentGroup[]>(this.baseUrl + "deptGroups");
    }

    getRoleList(): Observable<RoleGroup[]> {
        return this.http.get<RoleGroup[]>(this.baseUrl + "roleGroups");
    }
    save(task: Task): Observable<Task> {
        return this.http.post<Task>(this.baseUrl + "tasks", task);
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + "users", user);
    }

    findUser(username: string, password: string): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + "users?username=" + username + "&password=" + password);
    }
}
