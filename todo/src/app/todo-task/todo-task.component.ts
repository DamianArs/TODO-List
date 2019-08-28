import { Task } from './../model';
import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

tasks:Task[]=[];


  constructor(public taskService: TaskService, public http: HttpService) {
    this.taskService.getObs().subscribe(tasks =>{
      this.tasks = tasks.filter(t => t.isDone===false);
    })
   }

  ngOnInit() {
  }
made(task){
 this.taskService.made(task);

this.http.patch(task).subscribe(data=>{
  data.isDone = true;
});
}
remove(task){
 this.taskService.remove(task);
 this.http.delete(task.id).subscribe();
}
getColor(){
 return this.tasks.length >=5 ? 'red' : 'green';
}
save(task){
  this.http.save(task).subscribe();
}
}
