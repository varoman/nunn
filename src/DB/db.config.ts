import { Dialect } from "sequelize";

export class DbConfig {
    public readonly database: string = 'testDB';
    public readonly username: string = 'postgres';
    public readonly password: string = 'varofromdataart';
    public readonly host: string = 'localhost';
    public readonly dialect: Dialect = 'postgres';
}