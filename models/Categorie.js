import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import e from "express";

const Categorie = sequelize.define('Categorie', {
    id_categorie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'categorie',
    timestamps: false,
});

export default Categorie;