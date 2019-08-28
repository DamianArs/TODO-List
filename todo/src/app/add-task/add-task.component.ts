import { HttpService } from './../services/http.service';
import { Task } from './../model';
import { TaskService } from './../services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newtask: string;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }
  add(){
    let task: Task=({name: this.newtask, created: new Date().toLocaleString(), isDone: false});
    this.taskService.add(task);
    this.newtask="";
  }

}
