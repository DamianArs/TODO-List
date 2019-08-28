import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTaskComponent } from './todo-task/todo-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full',
  },
  {
    path: 'todoTask',
    component: TodoTaskComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'doneTask',
    component: DoneTaskComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
