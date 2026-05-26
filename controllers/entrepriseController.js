import { Entreprise, Specialite } from "../models/index.js";


//Récupérer toutes les entreprises
export const getAllEntreprises = async (req, res) => {
    try {
        const entreprises =
            await Entreprise.findAll();
        res.status(200).json(entreprises);
    }
    catch(error){
        console.error(error);
        res.status(500).json(error);
    }
};

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

// Récupérer les entreprises par Specialite 
export const getEntreprisesBySpecialite = async (req, res) => {
    try {
        const { id_specialite } = req.params;
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

// Récupérer les entreprises par Categorie (via la spécialité)
export const getEntreprisesByCategorie = async (req, res) => {
    try {
        const { id_categorie } = req.params;
        const entreprises = await Entreprise.findAll({
            freezeTableName: true,
            include: [{
                model: Specialite,
                where: { id_categorie }
            }]
        });
        res.status(200).json(entreprises);
    } catch (error) {
        console.error('ERREUR DANS ENTREPRISE_CONTROLLER :', error);
        res.status(500).json({ error: error.message });
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

    // Récupérer la Fiche Artisan (Détail de l'entreprise via son nom pour les URL)
    export const getEntrepriseByName = async (req, res) => {
    try {
        const { nom_entreprise } = req.params;

        const nomFormate = nom_entreprise.replace(/-/g, ' '); //Remplacer les espaces par des tirets pour correspondre au format de la base de données

        const entreprise = await Entreprise.findOne({
            where: { nom: nomFormate },
            include: [{ model: Specialite }]
        });

        if (!entreprise) {
            return res.status(404).json({ error: 'Artisan non trouvé.' });
        }
        res.status(200).json(entreprise);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'entreprise par nom :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'entreprise.' });
    }
};    