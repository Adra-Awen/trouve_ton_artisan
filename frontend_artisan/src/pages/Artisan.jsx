import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import FormulaireContact from '../components/FormulaireContact';
import Page404 from './NotFound';


// Page de détails d'un artisan
function Artisan() {
    const { nom } = useParams();
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
        setArtisan(null);
        // Récupérer les détails de l'artisan depuis le backend
        fetch(`${import.meta.env.VITE_API_URL}/entreprises/nom/${nom}`)
            .then(response => response.json())

            .then(data => {

                // Si le backend renvoie une erreur
                if (data.error) {
                    setArtisan(false);
                } else {
                    setArtisan(data);
                }
            })

            .catch(error => {

                console.error(
                    "Erreur lors de la récupération de l'artisan :",
                    error
                );

                setArtisan(false);
            });

    }, [nom]);

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
        <>
            {/* Titre et description de la page pour référencement */}
            <Helmet>
                <title>
                    { artisan ? `${artisan.nom} - Trouve Ton Artisan` :  "Trouve Ton Artisan - Auvergne-Rhône-Alpes" }
                    </title>
                <meta name="description" content={artisan ? `${artisan.nom}, ${artisan.Specialite?.nom} à ${artisan.ville} ${artisan.description}`: "Des artisans qualifiés près de chez vous."}/>
                <meta name="keywords" content="artisan, artisan local, Auvergne-Rhône-Alpes" />
            </Helmet>

            {artisan === false
                ?<Page404/>
                : !artisan
                    ? <div> Chargement...</div>
                : (
                    <div className="artisan-container py-4 text-start">
                        
                        {/*Titre catégorie de l'artisan*/}
                        <h2 className="h2-categorie fw-bold mb-4">
                            {artisan.Specialite?.Categorie?.nom}
                            </h2>
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
                )
            }
        </>
    );
}

export default Artisan;