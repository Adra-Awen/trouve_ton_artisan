import { Contact } from "../models/index.js";

// Envoyer un message et sauvegarder un message de contact dans la base de données
export const createContactMessage = async (req, res) => {
    try {
        const { nom_expediteur, prenom_expediteur, email_expediteur, code_postal, objet, message, date, id_entreprise } = req.body;

//Vérifier que tous les champs requis sont présents
    if (!nom_expediteur || !prenom_expediteur || !email_expediteur || !code_postal || !message || !id_entreprise) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    const newMessage = await Contact.create({
        nom_expediteur,
        prenom_expediteur,
        email_expediteur,
        code_postal,
        message,
        id_entreprise: id_entreprise || null // Lier le message à une entreprise 
    });

    res.status(201).json({ message: 'Message de contact créé avec succès.', data: newMessage });
    } catch (error) {
        console.error('Erreur lors de la création du message de contact :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du message de contact.' });
    }
};
