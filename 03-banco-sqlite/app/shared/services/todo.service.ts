import { Injectable } from '@angular/core';
import { Todo } from '../entities/todo';
import { DB } from './db';

@Injectable()
export class TodoService extends DB {

    getAll(): any {
        return this.database.all('SELECT * FROM Todo');
    }

    get(id: number): any {
        return this.database.get('SELECT * FROM Todo WHERE id = ?', [id]);
    }

    add(todo: Todo): any {
        return this.database.execSQL('INSERT INTO Todo (title, description, isDone) VALUES (?,?,0)', [todo.title, todo.description]);
    }

    udpate(id: number, status: number): void {
        this.database.execSQL('UPDATE Todo SET isDone = ? WHERE id = ?', [status, id])
            .then(x => {
                console.log('Status atualizado com sucesso');                
            }, error => {
                console.error('Não foi possível atualizar o status', error);
            });
    }

    remove(id: number): any {
        return this.database.execSQL('DELETE FROM Todo WHERE id = ?', [id]);
    }
}
