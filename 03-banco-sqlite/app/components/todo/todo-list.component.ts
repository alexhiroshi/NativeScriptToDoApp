import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/entities/todo';

import { Page } from 'ui/page';

@Component({
  selector: 'todo-list',
  moduleId: module.id,
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoService: TodoService,
              private router: RouterExtensions,
              private page: Page) {
      let _this = this;
      this.page.on(Page.navigatingToEvent, () => {
        _this.bindList();
      });
  }

  ngOnInit() {
    this.bindList();
  }

  bindList() {
    let list: Todo[] = [];
    this.todoService.getAll().then(rows => {
        for (let row in rows)
          list.push({ id: rows[row].id, title: rows[row].title, description: rows[row].description, isDone: rows[row].isDone == 1 });
    }, error => {
        console.log('Não foi possível obter a lista de ToDos');
    });

    this.todoList = list;
  }

  addItem() {
    this.router.navigate(['/todoAdd']);
  }

  updateStatus(id: number, isDone: boolean) {
    this.todoService.udpate(id, +(!isDone));
  }
}