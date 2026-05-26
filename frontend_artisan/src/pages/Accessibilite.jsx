import React, {useEffect} from 'react';
import {Link } from 'react-router-dom'


function Accessibilite() {
    useEffect(() => {
        document.title = "Accessibilité | Trouve ton artisan"
    })
    return (
        <div className="container py-5 text-start">
            <h2 className="h2-categorie fw-bold mb-4">
                Accessibilité
            </h2>
            <p className="fs-5">
                Cette page est actuellement en construction.
            </p>
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
}

export default Accessibilite;