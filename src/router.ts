import {Router, Application} from 'express';
import authRouter            from './modules/auth/auth.router.js';


export class ApiRouter {
	private router: Router = Router();
	private routes: Array<{ path: string, handler: Router }> = [
		{
			path: '/auth',
			handler: authRouter.getRouter(),
		}
	]

	public init(app: Application) {
		app.use('/api', this.router);
		this.setRoutes();
	}

	public setRoutes(): void {
		for (let route of this.routes) {
			this.router.use(route.path, route.handler);
		}
	}

}
