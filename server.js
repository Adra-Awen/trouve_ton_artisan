import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import apiRouter from "./routes/api.js";

// Variable d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", apiRouter);

//Connexion à la BDD et lancement du serveur
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie !');
        app.listen(PORT, () => {
            console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
        });
    } catch (error) {
        console.error('Impossible de se connecter à la base de données :', error);
    }  
};

startServer();