import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Todo } from '../../shared/entities/todo';

import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'todo-add',
  moduleId: module.id,
  templateUrl: './todo-add.component.html',
  providers: [TodoService]
})
export class TodoAddComponent implements OnInit {
  todoItem: Todo;

  constructor(private route: ActivatedRoute,
              private nav: RouterExtensions,
              private todoService: TodoService) { }

  ngOnInit() {
    this.todoItem = new Todo();
  }
  
  Add() {
    this.todoService.add(this.todoItem)
      .then(x => {
        this.nav.navigate(['todoList'], { clearHistory: true });              
      }, error => {
        console.error('Não foi possível adicionar o ToDo', error);
      })
  }

  onBack() {
    this.nav.back();
  }
}