import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import FormulaireContact from '../components/FormulaireContact';


// Page de détails d'un artisan
function Artisan() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);

    const noteSafe = artisan?.note || 0;
    //Générer les étoiles de notation
    const renderStars = (note) => {
        return (
            <div className="stars-container">
                <div className="stars-empty">
                     ★★★★★
                </div>
                <div
                    className="stars-filled"
                    style={{ width: `${(note / 5) * 100}%` }}
                >
                     ★★★★★
                </div>
            </div>
        );
    };

    useEffect(() => {
        // Récupérer les détails de l'artisan depuis le backend
        fetch(`http://localhost:3000/entreprises/${id}`)
            .then(response => response.json())
            .then(data => setArtisan(data))
            .catch(error => console.error('Erreur lors de la récupération de l\'artisan :', error));
    }, [id]);

    if (!artisan) {
        return <div>Chargement...</div>;
    }

    const getCategorieRoute = (idCategorie) => {
        switch (idCategorie) {
            case 1:
                return '/batiment';
            case 2:
                return '/services';
            case 3:
                return '/fabrication';
            case 4:
                return '/alimentation';
            default:
                return '/';
        }
    };

   //Affichage de l'image de l'artisan et des informations principales
    return (
        <div className="artisan-container py-4 text-start">
            <div className="card border-0  p-4 mb-4">
                <div className="row g-4 align-items-start">

                    {/*Image de l'artisan*/}
                    <div className="col-12 col-lg-4 text-start">
                        <img
                            src={ `/${artisan.image}` }
                            alt={artisan.nom}
                            className="img-fluid artisan-image-page"
                        />
                    </div>

                    {/* Informations sur l'artisan */}
                    <div className="artisan-info col-8 p-4 text-start">
                        <h3 className="h3 fw-bold mb-1 ">{artisan.nom}</h3>
                        <p className="mb-1 "> {artisan.Specialite?.nom}</p>
                        <p className="mb-1 ">{artisan.ville}</p>
                        <div className="note-star d-flex align-items-center ">
                            {renderStars(noteSafe)}
                        </div>
                            <p className="texte-description fw-italic mb-0">
                                {artisan.description}
                            </p>                            
                        
                    {/* Coordonnées de l'artisan */}
                    <div className="contact-artisan card border-0 mt-3 text-start fw-bold">
                            <p>
                                <a 
                                    className="mb-0 text-decoration-none"
                                    href={artisan.email ? `mailto:${artisan.email}` : '#'}
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Email
                                </a>                            
                            </p>
                        {artisan.web && (
                            <p>
                                <a 
                                    className="mb-0 text-decoration-none"
                                    href={artisan.web} 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    Visiter le site web
                                </a>
                            </p>
                        )}
                    </div>
                </div>                    
            </div>         

                {/* Formulaire de contact */}
                <div className="formulaire-contact card border-0 p-4">
                    <h3 className="h3 fw-bold mb-4">Contacter {artisan.nom}</h3>
                    <FormulaireContact artisan={artisan} />
                </div>

                {/* Bouton retour à la catégorie correspondante à l'artisan */}
                <div className="d-flex justify-content-end mt-3">
                    <Link 
                        to={getCategorieRoute(artisan.Specialite?.id_categorie)}
                        className="btn btn-outline-primary p-3">
                        Retour à la catégorie
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Artisan;