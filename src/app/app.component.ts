import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                <a class="navbar-brand" href="/">FireBootCamp Angular - Todo</a>
                </div>
            </div>
        </nav>
        <div class="container">
            <todo></todo>
        </div>
    `
    templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent { }

//Questions: How to get external html working.
// - Added to index.html
// - Got 404 error
