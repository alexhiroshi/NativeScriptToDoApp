import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/entities/todo';

@Component({
  selector: 'todo-list',
  moduleId: module.id,
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoService: TodoService,
              private router: RouterExtensions) { }

  ngOnInit() {
    this.todoList = this.todoService.getAll();
  }

  addItem() {
    this.router.navigate(['/todoAdd']);
  }

  updateStatus(id: number, isDone: boolean) {
    this.todoService.udpate(id, +(!isDone));
  }
}