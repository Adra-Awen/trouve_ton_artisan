import { Sequelize } from 'sequelize';
import 'dotenv/config';

//Initialisation de la connexion à la base de données MySQL
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false, // Désactive les logs SQL dans la console
    }
);

export default sequelize;