import React from 'react';

const ArtisanCard = ({ image, nom, id_specialite, ville, note }) => { 
    // Génération de la note en étoiles
    const renderStars = (note) => {
        const stars = [];
        const etoilesPleines = Math.floor(note);
            for (let i = 1; i <= 5; i++) {
                stars.push(
                <span 
                    key={i} 
                    className="me-1" 
                    style={{ color: '#0074C7' }}
                >
                        {i <= etoilesPleines ? '★' : '☆'}
                    </span>
                );
            }
        return stars;
    };

    return (
        <div className="card border-0 p-3 mb-3 bg-white rounded-3" style={{ maxWidth: '450px' }}>
            <div className="row g-3 align-items-center">

                {/* partie gauche : image */}
                <div className="col-md-4 col-sm-3 text-center">
                    <img 
                        src={image || 'artisan.jpg'} 
                        alt={nom} className="img-fluid"  
                        style={{width: '100%', height: 'auto', objectFit: 'cover'}} 
                    />
                </div>

                {/* partie droite : informations */}
                <div className="col-8 col-sm-9 text-start ps-3">
                    <h3 className="h3 fw-bold text-dark mb-1">{nom}</h3>
                    <p className="text-secondary m-0 lh-sm small">{id_specialite}</p>
                    <p className="mt-2 d-flex align-items-center">{ville}</p>
                    <div className="d-flex align-items-center">
                        {renderStars(note)}
                        <span className="ms-2">{note.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtisanCard;