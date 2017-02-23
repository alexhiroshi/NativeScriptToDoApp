import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Todo } from '../../shared/entities/todo';
import { TodoService } from '../../shared/services/todo.service';

import dialogs = require("ui/dialogs");

@Component({
  selector: 'todo-detail',
  moduleId: module.id,
  templateUrl: './todo-detail.component.html',
  providers: [TodoService]
})
export class TodoDetailComponent implements OnInit {
  todoItem: Todo;
  todoId: number;

  constructor(private route: ActivatedRoute,
              private nav: RouterExtensions,
              private service: TodoService) { }

  ngOnInit() {
    this.todoId = +this.route.snapshot.params['id'];
    this.todoItem = this.service.get(this.todoId);
  }

  deleteItem() {
    dialogs.confirm("Tem certeza que deseja remover este item?").then(result => {
      if (result) {
        this.service.remove(this.todoId);
        this.nav.navigate(['todoList']);
      }
    });
  }

  onBack() {
    this.nav.back();
  }
}