import { Component } from '@angular/core';
import { Todo } from './todo.module';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todo.component.html',
    styleUrls: []
})

export class TodoComponent {
    todos: Todo[] = [
        { text: 'learn angular', done: true },
        { text: 'build an angular app', done: false }
        { text: 'Y\'all need to see this', done: false }
    ];

    addTodo(task: Todo) {
        this.todos.push(task);
    }
}
