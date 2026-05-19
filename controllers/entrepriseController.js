import { Entreprise, Specialite } from "../models/index.js";

// Récupérer les artisans du mois (Top Entreprises)
export const getTopEntreprises = async (req, res) => {
    try {
        const entreprises = await Entreprise.findAll({
            where: { top_entreprise: true },
            include: [{ model: Specialite }]
        });
        res.status(200).json(entreprises);
    } catch (error) {
        console.error('Erreur lors de la récupération des entreprises :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des entreprises.' });
    }
};

// Récupérer les entreprises par Specialite ou Categorie
export const getEntreprisesBySpecialite = async (req, res) => {
    const { id_specialite } = req.params;
    try {
        const entreprises = await Entreprise.findAll({
            where: { id_specialite },
            include: [{ model: Specialite }]
        });
        res.status(200).json(entreprises);
    } catch (error) {
        console.error('Erreur lors de la récupération des entreprises :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des entreprises.' });
    }
};

// Récupérer la Fiche Artisan (Détail de l'entreprise via son id)
    export const getEntrepriseById = async (req, res) => {
        try {
            const { id} = req.params;
            const entreprise = await Entreprise.findByPk(id, {
                include: [{ model: Specialite }]
            });

            if (!entreprise) {
                return res.status(404).json({ error: 'Entreprise non trouvée.' });
            }
            res.status(200).json(entreprise);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'entreprise :', error);
            res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'entreprise.' });
        }
    };