import { Sequelize } from('sequelize');
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

// Test de la connexion à la base de données
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie !');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
    }
};

testConnection();
module.exports = sequelize;