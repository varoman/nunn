import { Router, Request, Response, Application } from 'express';


export class ApiRouter {
    private router: Router = Router();

    public init(app: Application) {
        app.use('/api', this.router);
        this.setRoutes();
    }


    public setRoutes(): void {
        this.router.use('/auth/sign-up/', (req: Request, res: Response) => res.send('this is signup'));
    }
}