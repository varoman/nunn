import { RequestHandler } from '../requestHandler.interface';
import { Request, Response, NextFunction } from 'express';
import {User} from '../../db/models/user.model.js';

export class Signup implements RequestHandler {
	public async handleRequest(req: Request, res: Response, next?: NextFunction) {
		const user: User = await User.create({
			email: 'new email',
			password: 'new password',
			name: 'testname'
		});
		res.send('Signup');
	}

}
