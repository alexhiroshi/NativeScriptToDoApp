import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { TodoService } from './shared/services/todo.service';
import { TodoListComponent } from './components/todo/todo-list.component';
import { TodoAddComponent } from './components/todo/todo-add.component';
import { TodoDetailComponent } from './components/todo/todo-detail.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,

        TodoListComponent,
        TodoAddComponent,
        TodoDetailComponent
    ],
    providers: [
        TodoService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
