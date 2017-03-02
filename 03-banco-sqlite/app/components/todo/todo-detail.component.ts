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
    var todo: Todo = new Todo();
    this.todoId = +this.route.snapshot.params['id'];

    this.service.get(this.todoId).then(row => {
      todo.id = row.id;
      todo.title = row.title;
      todo.description = row.description;
      todo.isDone = row.isDone;
    }, error => {
        console.error('Não foi possível obter o todo', error);
    });
    
    this.todoItem = todo;
  }

  deleteItem() {
    dialogs.confirm("Tem certeza que deseja remover este item?").then(result => {
      if (result) {
        this.service.remove(this.todoId).then(x => {
          this.nav.navigate(['todoList'], { clearHistory: true });              
        }, error => {
          console.error('Não foi possível remover o ToDo', error);
        });
      }
    });
  }

  onBack() {
    this.nav.back();
  }
}