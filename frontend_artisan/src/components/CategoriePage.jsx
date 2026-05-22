import React, { useEffect, useState } from 'react';
import ArtisanCard from './ArtisanCard';
import { Link } from 'react-router-dom';

const CategoriePage = ({ titre, idCategorie }) => {

    const [artisans, setArtisans] = useState([]);

// Récupération des artisans de la catégorie
    useEffect(() => {
        fetch(`http://localhost:3000/entreprises/categorie/${idCategorie}`)
            .then(response => response.json())
            .then(data => {
                setArtisans(Array.isArray(data) ? data : []);
            })
            .catch(error => {
                console.error(error);
            });
    }, [idCategorie]);

    return (
        <div className="text-start container py-4">
            <h2 className="h2-categorie fw-bold mb-4 ">
                {titre}
            </h2>
            {/*Affichage des artisans de la catégorie*/}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {artisans.map((artisan) => (
                    <div
                        className="col"
                        key={artisan.id_entreprise}
                    >
                        {/*Affichage de la carte de l'artisan*/}
                        <ArtisanCard
                            id={artisan.id_entreprise}
                            nom={artisan.nom}
                            image={`/${artisan.image}`}
                            id_specialite={
                                artisan.Specialite
                                    ? artisan.Specialite.nom
                                    : "Artisan"
                            }
                            ville={artisan.ville}
                            note={Number(artisan.note) || 0}
                        />
                    </div>
                ))}
            </div>

            {/*  Bouton retour à l'accueil/ */}
            <div className="row mt-4">
                <div className="col text-end">
                    <Link
                        to="/"
                        className="btn btn-outline-primary p-3">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriePage;