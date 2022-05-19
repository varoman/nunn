import {Router} from 'express';
import {Signup}    from './signup.js';


class AuthRouter {
	private router: Router = Router();
	private signUpSerializer: Signup = new Signup();

	constructor() {
		this.setRoutes();
	}

	private setRoutes(): void {
		this.router.post('/sign-up', this.signUpSerializer.handleRequest);
	}

	public getRouter(): Router {
		return this.router;
	}
}

export default new AuthRouter();
