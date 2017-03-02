var Sqlite = require('nativescript-sqlite');

export class DB {
    private databaseName: string = 'todo-app.db';
    public database: any;

    constructor() {
        let sqlCreateTable = 'CREATE TABLE IF NOT EXISTS Todo ' + 
                            '(id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'title VARCHAR(100) NOT NULL,' +
                            'description VARCHAR(255) NULL,'+
                            'isDone INTEGER NOT NULL DEFAULT 0)';

        new Sqlite(this.databaseName).then(db => {
            db.execSQL(sqlCreateTable).then(x => {
                this.database = db;
                db.resultType(Sqlite.RESULTSASOBJECT);
            }, error => {
                alert('Não foi possível criar a tabela');
            });
        }, error => {
            alert('Não foi possível conectar com o banco de dados');
        });
    }
}
