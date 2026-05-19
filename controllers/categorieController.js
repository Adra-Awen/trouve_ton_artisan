import { Categorie, Specialite } from "../models/index.js";

// Récupérer les catégories et leurs spécialités associées
export const getCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll({
            include: [{ model: Specialite }]
        });
        res.status(200).json(categories);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des catégories.' });
    }
};