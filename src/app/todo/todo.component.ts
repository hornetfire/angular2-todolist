import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.module';
import { TodoService } from './todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todo.component.html',
    styles: ['a { cursor: pointer; cursor: hand; }'],
    providers: [TodoService]
})

export class TodoComponent implements OnInit {
    todos: Todo[];

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        this.todos = this._todoService.get().filter(todo => todo.archived !== true)
    }

    get remaining() {
        return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
    }

    archive(): void {
        this.todos = this.todos.map((todo: Todo) => {
            if (todo.done) todo.archived = true;
            return todo;
        }).filter(todo => todo.done !== true);
    }

    addTodo(task: Todo) {
        task.archived = false;
        this.todos.push(task);
        this._todoService.push(task);
    }
}
