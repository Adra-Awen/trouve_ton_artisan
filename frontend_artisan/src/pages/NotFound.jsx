import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import erreur404 from '../assets/erreur404.jpg';

function Page404 (){
    return (
        <>
            {/* Titre et description de la page pour référencement */}
            <Helmet>
                <title>Page introuvable - Trouve ton artisan - Auvergne-Rhône-Alpes</title>
                <meta name="description" content="Trouve ton artisan Auvergne-Rhône-Alpes. Page introuvable."/>
            </Helmet>
            {/* Affichage de la page*/}
            <div className="container py-5 text-center">
                <h2 className="fw-bold mb-3">
                    La page que vous cherchez n'existe pas. 
                </h2>
                <img 
                    src={erreur404}
                    alt="Page introuvable"
                    className= "img-fluid mb-4 image-404"
                />
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
        </>
    );
}

export default Page404;