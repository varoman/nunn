import { Router, Application } from 'express';
import {Signup} from './modules/auth/signup.js';
import {RequestHandler} from './modules/requestHandler.interface';


export class ApiRouter {
    private router: Router = Router();

    public init(app: Application) {
        app.use('/api', this.router);
        this.setRoutes();
    }


    public setRoutes(): void {
        for (let route of this.routes) {
            const handler: RequestHandler = new route.handler();
            this.router.use(route.path, handler.handleRequest);
        }

    }

    private routes: Array<{path: string, handler: any}> = [
            {
                path: '/auth/sign-up/',
                handler: Signup
            }
        ]

}
