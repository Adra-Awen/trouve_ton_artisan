import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Specialite = sequelize.define('Specialite', {
    id_specialite: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },      
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'specialite',
    timestamps: false,
});

export default Specialite;