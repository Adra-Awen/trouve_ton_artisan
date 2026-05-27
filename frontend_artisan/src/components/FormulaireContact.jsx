import React, {useState} from 'react';

// Composant de formulaire de contact pour les artisans
// Contacter directement l'artisan en envoyant le message 
// directement à l'adresse email de l'artisan
function FormulaireContact({ artisan }) {
    
    //Gérer les données du formulaire
    const [formData, setFormData] = useState({
        nom_expediteur: '',
        prenom_expediteur: '',
        email_expediteur: '',
        code_postal: '',
        objet: '',
        message: ''
    });

    const [success, setSuccess] = useState(false);

    //Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //Gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Envoyer les données du formulaire au backend
        try {
            const response = await fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nom_expediteur: formData.nom_expediteur,
                    prenom_expediteur: formData.prenom_expediteur,
                    email_expediteur: formData.email_expediteur,
                    code_postal: formData.code_postal,
                    objet: formData.objet,
                    message: formData.message,
                    email_destinataire: artisan.email,
                    id_entreprise: artisan.id_entreprise
                })
            }
        );
        if (!response.ok) {                
            throw new Error('Le message n\'a pas pu être envoyé. Veuillez réessayer plus tard.');
        }
            
            // afficher message de succès si réponse OK
            // et réinitialiser le formulaire
            if (response.ok) {
                setSuccess(true);
                setFormData({
                    nom_expediteur: '',
                    prenom_expediteur: '',
                    email_expediteur: '',
                    code_postal: '',
                    objet: '',
                    message: ''
                });
            }

        } catch (error) {
            console.error('Une erreur est survenue lors de la soumission du formulaire:', error);
        }
    };

    // Afficher le formulaire de contact
    return (
        <div className="formulaire-container">
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-12 col-lg-12 pb-4">
                        <label className="form-label">Nom</label>
                        <input id="nom" name="nom_expediteur" type="text" className="form-control rounded-4 p-3" placeholder="Votre nom" value={formData.nom_expediteur} onChange={handleChange} required />
                        <label className="form-label">Prénom</label>
                        <input id="prenom" name="prenom_expediteur" type="text" className="form-control rounded-4 p-3" placeholder="Votre prénom" value={formData.prenom_expediteur} onChange={handleChange} required />
                        <label className="form-label">Email</label>
                        <input id="email" name="email_expediteur" type="email" className="form-control rounded-4 p-3" placeholder="Votre email" value={formData.email_expediteur} onChange={handleChange} required />
                        <label className="form-label">Code Postal</label>
                        <input id="code_postal" name="code_postal" type="text" className="form-control rounded-4 p-3" placeholder="Votre code postal" value={formData.code_postal} onChange={handleChange} required />
                        <label className="form-label">Objet</label>
                        <input id="objet" name="objet" type="text" className="form-control rounded-4 p-3" placeholder="Objet" value={formData.objet} onChange={handleChange} required />
                        <label className="form-label">Message</label>
                        <textarea id="message" name="message" className="form-control rounded-4 p-3" placeholder="Votre message..." value={formData.message} onChange={handleChange} required />
                    </div>
                </div>
                <button className="btn btn-primary p-3 fw-bold" type="submit">Envoyer</button>
                {success&&
                    <p className="success-message mt-3">
                        Votre message a été envoyé avec succès. 
                    </p>
                }
            </form> 
        </div>
    );
}

export default FormulaireContact;
