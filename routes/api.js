import express from "express";

//Import depuis controllers/index.js
import { 
    getAllEntreprises,
    getSpecialites, 
    getCategorieBySlug,
    getTopEntreprises,
    getEntreprisesBySpecialite,
    getEntreprisesByCategorie,
    getEntrepriseById,
    getEntrepriseByName,
    createContactMessage,

} from "../controllers/index.js";

const router = express.Router();

// Route pour la page d'accueil de l'API
router.get("/", (req, res) => {
    res.send("Bienvenue sur Trouve Ton Artisan !");
});

// Routes pour les spécialités
router.get("/specialites", getSpecialites);

// Routes pour les catégories
router.get("/categories/:slug", getCategorieBySlug);

// Routes pour les entreprises
router.get("/entreprises", getAllEntreprises);
router.get("/entreprises/top", getTopEntreprises);
router.get("/entreprises/categorie/:id_categorie", getEntreprisesByCategorie);
router.get("/entreprises/specialite/:id_specialite", getEntreprisesBySpecialite);
router.get("/entreprises/:id", getEntrepriseById);
router.get("/entreprises/nom/:nom_entreprise", getEntrepriseByName);


// Routes pour les contacts
router.post("/contacts", createContactMessage);

export default router;