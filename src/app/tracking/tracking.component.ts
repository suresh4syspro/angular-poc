import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from "../models/task";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
     task: Task;

     taskTrackForm  = new FormGroup( {
        createdDate: new FormControl('1-01-2012'),
        empRole:new FormControl('Developer'),
        message: new FormControl(''),
        createdBy: new FormControl('devendhar')
     });
    
  constructor(private apiService: ApiService, private router: Router) {
      this.task = new Task();
   }

   
  ngOnInit(): void {
  }

  onSubmit() {
    this.apiService.save(this.taskTrackForm.value).subscribe(result =>  this.gotoTaskList());
  }

  gotoTaskList() {
        this.router.navigate(['/tracking-list']);
  }
}
