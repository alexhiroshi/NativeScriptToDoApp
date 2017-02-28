import { Injectable } from "@angular/core";
import { Todo } from "../entities/todo";

@Injectable()
export class TodoService {
    private todoList = new Array<Todo>(
        { id: 1, title: '1 pão', description: 'Comprar 1 pacote de pão integral', isDone: false },
        { id: 2, title: '1 Leite', description: 'Comprar 1 leite', isDone: false },
        { id: 3, title: 'Limpar quarto', description: 'Não esquecer de lavar roupa de cama', isDone: true },
        { id: 4, title: 'Lavar o carro', description: 'Lavar o carro perto do trabalho', isDone: false }
    );

    getAll(): Todo[] {
        return this.todoList;
    }

    get(id: number): any {        
        return this.todoList.filter(x => x.id === id)[0];
    }

    add(todo: Todo): void {
        // TODO: Salvar na base
    }

    udpate(id: number, status: number): void {
        // TODO: atualizar na base
    }

    remove(id: number): void {
        // TODO: remover da base
    }
}
