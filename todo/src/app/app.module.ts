import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { CheckedDirective } from './directives/checked.directive';
import { DateDirective } from './directives/date.directive';
import { LetterPipe } from './pipes/letter.pipe';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: "AIzaSyDw_QObV1voR5CqWmoLGCUflvHfC3oUu5g",
  authDomain: "todo-list-39c59.firebaseapp.com",
  databaseURL: "https://todo-list-39c59.firebaseio.com",
  projectId: "todo-list-39c59",
  storageBucket: "",
  messagingSenderId: "736338514706",
  appId: "1:736338514706:web:3f660f1e2bdfc4c2"
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    LetterPipe,
    SortPipePipe,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
