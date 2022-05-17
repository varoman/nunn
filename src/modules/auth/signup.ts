import {RequestHandler}                  from '../requestHandler.interface';
import {Request, Response, NextFunction} from 'express';
import {User}                            from '../../db/models/user.model.js';
import {StatusCodes}                     from '../../shared/statusCodes.js';

export class Signup implements RequestHandler {
	public handleRequest(req: Request, res: Response, next?: NextFunction): void {
		User.create({
			email: 'new email',
			password: 'new password',
			name: 'testname'
		})
			.then(() => res.sendStatus(StatusCodes.ok))
			.catch(err => res.status(StatusCodes.badRequest).end(err.errors[0].message));
	}

}
