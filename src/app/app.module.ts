import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoFormComponent } from './todo/todo-form.component';
import { TodoArchiveComponent } from './todo/todo-archive.component';

@NgModule({
  imports: [BrowserModule, FormsModule, Routing],
  declarations: [AppComponent, TodoComponent, TodoListComponent, TodoFormComponent, TodoArchiveComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Questions
// What is the diff of impoerts and declarations