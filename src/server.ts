import * as http     from 'http';
import expressApp    from './app.js';
import {Application} from 'express';


class Server {
	private port: string = process.env.PORT || '5000';
	private expressApp: Application = expressApp.getApp();

	constructor() {
		this.start();
	}

	public start(): void {
		http.createServer(this.expressApp).listen(this.port);
	}
}

export default new Server();
