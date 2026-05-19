import { Specialite, Categorie } from "../models/index.js";

// Récupérer les spécialités et leurs catégories associées
export const getSpecialites = async (req, res) => {
    try {
        const specialites = await Specialite.findAll({
            include: [{ model: Categorie }]
        });
        res.status(200).json(specialites);
    } catch (error) {
        console.error('Erreur lors de la récupération des spécialités :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des spécialités.' });
    }
};