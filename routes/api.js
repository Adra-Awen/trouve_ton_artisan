import express from "express";

//Import depuis controllers/index.js
import { 
    getSpecialites, 
    getCategories,
    getEntreprises,
    getContacts,
    createContactMessage,
    getTopEntreprises
} from "../controllers/index.js";

const router = express.Router();

// Routes pour les spécialités
router.get("/specialites", getSpecialites);

// Routes pour les catégories
router.get("/categories/:slug", getCategories);

// Routes pour les entreprises
router.get("/entreprises/:nom_entreprise", getEntreprises);
router.get("/entreprises/top", getTopEntreprises);

// Routes pour les contacts
router.get("/contacts", getContacts);
router.post("/contacts", createContactMessage);

export default router;