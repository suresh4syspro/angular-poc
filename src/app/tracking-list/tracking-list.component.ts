import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from "../models/task";

@Component({
    selector: 'app-tracking-list',
    templateUrl: './tracking-list.component.html',
    styleUrls: ['./tracking-list.component.css']
})
export class TrackingListComponent implements OnInit {

    public tasks: Task[];
    public displayedColumns = [
        "id",
        "createdDate",
        "empRole",
        "message",
        "createdBy"];


    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getTaskList().subscribe(data => { this.tasks = data })
    }

}
