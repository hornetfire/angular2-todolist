// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { TodoComponent } from './todo.component';

@NgModule({
    imports: [

    ],
    declarations: [
        TodoComponent,
    ],
    exports: [
        TodoComponent,
    ]
})

export interface Todo {
    text: string,
    done: boolean
}

export class TodoModule { }
