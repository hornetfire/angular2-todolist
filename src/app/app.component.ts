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
                <ul class="nav navbar-nav">
                    <li> <a [routerLink]="['/']">Todos</a></li>
                    <li> <a [routerLink]="['/todoArchive']">Todo Archive</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    // templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent { }

//Questions: How to get external html working.
// - Added to index.html
// - Got 404 error
