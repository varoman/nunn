import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional, DataTypes,
} from 'sequelize';
import database from '../database.js';
export class User extends Model <InferAttributes<User>, InferCreationAttributes<User>> {
	declare id: CreationOptional<number>;
	declare email: string;
	declare name: string;
	declare password: string;
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	tableName: 'users',
	sequelize: database.getInstance(),
});

User.sync();
