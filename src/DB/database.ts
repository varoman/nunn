import { Sequelize } from 'sequelize';
import { DbConfig } from './db.config.js';


// const { NODE_ENV } = process.env;
// const { username, password, database, host, dialect } = require('./config/database')[NODE_ENV];
// const { DATABASE_URL } = process.env;

// const options = [
//     'd37bivntj1ldkh', 'ofsvsneglfuaep',
//     '4086875ca67668b8c5d5f9b8031209f29b8dd431cd9e7f2f54053c5d5c414ffd',
//     { host: 'ec2-184-73-176-11.compute-1.amazonaws.com',
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {require:true}
//         }
//     },
// ];


export class Database {
    private config: DbConfig = new DbConfig();

    public getInstance(): Sequelize {
        return this.sequelize;
    }

    private sequelize: Sequelize = new Sequelize(
        this.config.database,
        this.config.username,
        this.config.password, {
            host: this.config.host,
            dialect: this.config.dialect,
            port: this.config.port,
        },
    );

    public init(): void {
        this.sequelize
            .authenticate()
            .then(() => console.log('Connection has been established successfully.'))
            .catch((err: string) => console.error('Unable to connect to the database:', err));
    }
}
