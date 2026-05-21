import React, { useState, useEffect } from 'react';
import ArtisanCard from '../components/ArtisanCard';

const Batiment = () => {
  // State pour stocker la liste des artisans filtrés
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/api/get_artisans.php?categorie=1')
        .then((response) => response.json())
        .then((data) => {
            setArtisans(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des artisans:", error);
            setLoading(false);
        });
}, []);

    if (loading) {
        return <div className="text-center py-5"><h3>Chargement des artisans...</h3></div>;
    }

    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-4 text-start">Bâtiment</h2>
            {artisans.length === 0 ? (
                <p className="text-muted text-start">Aucun artisan trouvé dans cette catégorie.</p>
            ) : (
                /* Grille Bootstrap responsive pour aligner les cartes */
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {artisans.map((artisan) => (
                    <div className="col" key={artisan.id_entreprise}>
                    
                    {/* Appel du modèle */}
                    <ArtisanCard 
                        nom={artisan.nom}
                        image={`/assets/${artisan.image}`}
                        id_specialite={artisan.nom_specialite || "Artisan du bâtiment"}
                        ville={artisan.ville}
                        note={parseFloat(artisan.note)}
                    />

                    </div>
                ))}
                </div>
            )}
        </div>
    );
};

export default Batiment;