import { Component, Input } from '@angular/core';
import { Todo } from './todo.module';

@Component({
  selector: 'todo-list',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
    <ul class="list-unstyled">
      <li *ngFor="let todo of todos" >        
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>
    `
})
export class TodoListComponent {
  @Input() todos: Todo[];
}