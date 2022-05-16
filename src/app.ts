import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApiRouter } from './router.js';


class App {
    private app: Application = express();
    private apiRouter = new ApiRouter();

    constructor() {
        this.setConfigs();
    }

    public getApp(): Application {
        return this.app;
    }

    private setConfigs(): void {
        this.app.use(bodyParser.json());
        this.app.use(
            cors({
                origin: '*',
                credentials: true,
                methods:  [ 'GET', 'POST', ],
                allowedHeaders: [ 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
            })
        );
        this.apiRouter.init(this.app);
    }
}

export default new App();
