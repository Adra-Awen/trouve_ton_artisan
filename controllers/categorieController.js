import { Categorie, Specialite } from "../models/index.js";

// Récupérer les catégories et leurs spécialités associées en fonction du slug
export const getCategoriesBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const categories = await Categorie.findAll({
            where: { slug },
            include: [{ model: Specialite }]
        });
        res.status(200).json(categories);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des catégories.' });
    }
};