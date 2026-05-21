import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Entreprise = sequelize.define('Entreprise', {
    id_entreprise: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    note: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: false
    },
    ville: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    web: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    top_entreprise: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    seo_title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    seo_description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'specialite',
            key: 'id_specialite'
        }
    }
}, {
    tableName: 'entreprise',
    freezeTableName: true,
    timestamps: false
});

export default Entreprise;