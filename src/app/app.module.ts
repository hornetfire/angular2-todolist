import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoFormComponent } from './todo/todo-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoComponent, TodoListComponent, TodoFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }