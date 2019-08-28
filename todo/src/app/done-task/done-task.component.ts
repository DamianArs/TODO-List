import { HttpService } from './../services/http.service';
import { TaskService } from './../services/task.service';
import { Component, OnInit} from '@angular/core';
import { Task } from '../model';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

taskDone: Task[] = [];
  constructor(public taskService: TaskService, public http: HttpService) {
    this.taskService.getObs().subscribe(tasks =>{
      this.taskDone = tasks.filter(t=>t.isDone===true);

    })
   }

  ngOnInit() {
  }
  remove(task){
    this.taskService.remove(task);
    this.http.delete(task.id).subscribe();
   }
}
