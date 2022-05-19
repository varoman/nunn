import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
	NonAttribute,
}                   from 'sequelize';
import database     from '../database.js';
import {HookReturn} from 'sequelize/types/hooks';
import bcryptjs     from 'bcryptjs';


const saltRounds: number = 10;
const passwordMinLength: number = 8;

export class User extends Model <InferAttributes<User>, InferCreationAttributes<User>> {
	declare id: CreationOptional<number>;
	declare email: string;
	declare name: string;
	declare password: string;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	public createUser({email, password, name}: User): NonAttribute<Promise<User>> {
		return User.create({
			email,
			name,
			password
		});
	}

}

User.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [passwordMinLength, 255],
			},
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
			beforeCreate: (user: User): HookReturn => {
				user.password = bcryptjs.hashSync(user.password, saltRounds);
			},
		},
		tableName: 'users',
		sequelize: database.getInstance(),
	});

User.sync({force: true});
