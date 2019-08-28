import { Task } from './../model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  server: string = 'http://localhost:3000/todo/';
  constructor(private http: HttpClient) {

   }
   get():Observable<Array<Task>>{
    return this.http.get<Array<Task>>(this.server);
    }
  save(task: Task):Observable<Task>{
    return this.http.post<Task>(this.server, task)};
  delete(id: number): Observable<Task>{
    return this.http.delete<Task>(this.server + id);

  }
  patch(task: Task){
    return this.http.patch<Task>(this.server + task.id, task);
  }
  }


