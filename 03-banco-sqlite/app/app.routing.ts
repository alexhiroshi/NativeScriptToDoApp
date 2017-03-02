import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TodoListComponent } from './components/todo/todo-list.component';
import { TodoDetailComponent } from './components/todo/todo-detail.component';
import { TodoAddComponent } from './components/todo/todo-add.component';

const routes: Routes = [
    { path: '', redirectTo: '/todoList', pathMatch: 'full' },
    { path: 'todoList', component: TodoListComponent },
    { path: 'todoAdd', component: TodoAddComponent },
    { path: 'detail/:id', component: TodoDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }