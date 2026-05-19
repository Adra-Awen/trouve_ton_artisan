import { Categorie, Specialite } from "../models/index.js";

// Récupérer les catégories et leurs spécialités associées en fonction du slug
export const getCategorieBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const categorie = await Categorie.findOne({
            where: { slug },
            include: [{ model: Specialite }]
        });
        res.status(200).json(categorie);
    } catch (error) {
        console.error('Erreur lors de la récupération de la catégorie :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la catégorie.' });
    }
};