import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Contact = sequelize.define('Contact', {
    id_contact: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_expediteur: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    prenom_expediteur: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email_expediteur: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    code_postal: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'contact',
    timestamps: false
});

export default Contact;