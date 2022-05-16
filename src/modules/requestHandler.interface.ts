import {Request, Response, NextFunction} from 'express';

export interface RequestHandler {
  handleRequest(req: Request, res: Response, next?: NextFunction): void;
}
