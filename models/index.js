import Categorie from "./Categorie.js";
import Contact from "./Contact.js";
import Entreprise from "./Entreprise.js";
import Specialite from "./Specialite.js"; 

// Définir les associations entre les modèles
// Une Categorie peut avoir plusieurs Specialite
Categorie.hasMany(Specialite, { foreignKey: 'id_categorie' });
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie' });

//Une Specialite peut avoir plusieurs Entreprise
Specialite.hasMany(Entreprise, { foreignKey: 'id_specialite' });
Entreprise.belongsTo(Specialite, { foreignKey: 'id_specialite' });

// Une Entreprise peut avoir plusieurs messages de contact
Entreprise.hasMany(Contact, { foreignKey: 'id_entreprise' });
Contact.belongsTo(Entreprise, { foreignKey: 'id_entreprise' });

export {
    Categorie,
    Contact,
    Entreprise,
    Specialite
};