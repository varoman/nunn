import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from 'sequelize';
import database from '../database.js';
import { HookReturn } from 'sequelize/types/hooks';
import bcryptjs from 'bcryptjs';


export class User extends Model <InferAttributes<User>, InferCreationAttributes<User>> {
	declare id: CreationOptional<number>;
	declare email: string;
	declare name: string;
	declare password: string;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
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
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false
	}
},
	{
		hooks: {
			beforeCreate(user: User): HookReturn {
				 user.password = bcryptjs.hashSync(user.password, 10);
			}
	},
		tableName: 'users',
		sequelize: database.getInstance(),
});

User.sync();
