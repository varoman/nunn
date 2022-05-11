import { Router, Request, Response } from 'express';

export class ApiRouter {
    private router: Router = Router();

    constructor() {
        this.setRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private setRoutes(): void {
        this.router.use('/auth', (req: Request, res: Response) => res.send('this is'));
    }
}