import React, { useEffect, useState } from 'react';

import ArtisanCard from './ArtisanCard';

// Fonction pour récupérer puis stocker
// les artisans mis en avant sur page d'accueil
function TopArtisans () {
    const [artisans, setArtisans] = useState([]);    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/entreprises/top`)
            .then(response => response.json())
            .then(data => {
                {/*Vérification des données dans un tableau*/}
                setArtisans(
                    Array.isArray(data) ? data : []
                );
            })

            .catch(error => {
                console.error(
                    'Erreur dans la récupération des top artisans',
                    error
                );
            });
    }, []);


    {/*Afficher les 3 artisans du mois*/}
    return (
        <section className="container py-5 text-start">
            <h2 className="h2-categorie fw-bold mb-4">
                Artisans du mois
            </h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {artisans.map((artisan) => (
                    <div
                        key={artisan.id_entreprise}
                        className="col"
                    >
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

        </section>
    );
}

export default TopArtisans;