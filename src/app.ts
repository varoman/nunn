import * as http from 'http';
import { Database } from './DB/database.js';
import expressApp from './expressApp.js';
import { Application } from 'express';


class App {
    private port: string = process.env.PORT || '5000';
    private database: Database = new Database();
    private expressApp: Application = expressApp.getApp();

    constructor() {
        this.start();
    }

    public start(): void {
        this.database.init();
        http.createServer(this.expressApp).listen(this.port);
    }
}

export default new App();
