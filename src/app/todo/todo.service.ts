import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable()
export class TodoService {

  public todos: Todo[] = [
    { text: 'learn angular', done: true, archived: true },
    { text: 'learn angular better', done: false, archived: false },
    { text: 'build an angular app', done: false, archived: false }
  ];

  constructor() { }

  get() {
    return this.todos;
  }

  push(todo: Todo) {
    this.todos.push(todo);
  }
}