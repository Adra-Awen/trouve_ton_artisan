import React from 'react';
import { Link } from 'react-router-dom';

const ArtisanCard = ({ image, nom, id_specialite, ville, note }) => {

    // Sécurité pour la note (conversion forcée + valeur de secours)
    const noteSafe = Number(note) || 0;

    // Génération des étoiles
    const renderStars = (note) => {
        return (
            <div className="stars-container">
                <div className="stars-empty">
                    ★★★★★
                </div>
                <div
                    className="stars-filled"
                    style={{
                        width: `${(note / 5) * 100}%`
                    }}
                >
                    ★★★★★
                </div>
            </div>
        );

    };

    // Rendu de la carte
    return (
        <Link className="link_artisan"to={`/artisan/${nom}`}>
            <div
                className="card artisan-card border-0 p-3 mb-3 bg-white"
            >
                <div className="row g-3 align-items-start">
                    {/* partie gauche : image */}
                    <div className="col-4 col-md-12 col text-center">
                        <img
                            src={image || 'artisan.jpg'}
                            alt={nom}
                            className="artisan-image img-fluid"
                        />
                    </div>

                    {/* partie droite : infos */}
                    <div className="col-8 col-md-12 text-start">
                        <h3 className="h3 fw-bold mb-1">
                            {nom}
                        </h3>
                        <p className="mb-1">
                            {id_specialite}
                        </p>
                        <p className="mb-2">
                            {ville}
                        </p>
                        <div className="note-star d-flex align-items-center">
                            {renderStars(noteSafe)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArtisanCard;