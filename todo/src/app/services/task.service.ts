import { HttpService } from './http.service';
import { Task } from './../model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, empty } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public taskObs = new BehaviorSubject<Array<Task>>([]);
  constructor(private serwisik: HttpService) {
    this.serwisik.get().subscribe(data=>{
      this.taskObs.next(data);
    })

  }
  add(task:Task){
  const list = this.taskObs.getValue();
  list.push(task);
  this.taskObs.next(list);

  }
  made(task:Task){
    task.isDone = true;
    const list = this.taskObs.getValue();
    this.taskObs.next(list);
  }
  remove(task){
    const list = this.taskObs.getValue().filter(e=> e!==task);
    this.taskObs.next(list);
  }
  getObs():Observable<Task[]>{
    return this.taskObs.asObservable();

  }
  }

