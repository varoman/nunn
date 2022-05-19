import {Request, Response} from 'express';
import {User}                            from '../../db/models/user.model.js';
import {StatusCodes}                     from '../../shared/statusCodes.js';
import {ValidationError}                 from 'sequelize';
import {RequestHandler}                  from '../requestHandler.interface.js';

export class Signup implements RequestHandler {
	public handleRequest(req: Request, res: Response): void {
		const user: User = new User();
		user
			.createUser(req.body)
			.then(() => res.sendStatus(StatusCodes.ok))
			.catch((err: ValidationError) => res
				.status(StatusCodes.badRequest)
				.end(err.errors[0].message));
	}

}
