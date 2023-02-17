import {Dialect} from "sequelize";

export class DbConfig {
	public readonly database: string = 'testDB';
	public readonly username: string = 'postgres';
	public readonly password: string = 'password';
	public readonly host: string = '172.18.0.1';
	public readonly dialect: Dialect = 'postgres';
	public readonly port: number = 5433;
}
