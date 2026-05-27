import CategoriePage from '../components/CategoriePage';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Services() {
    return (
        <>
            {/* Titre et description de la page pour référencement */}
            <Helmet>
                <title>Services - Trouve ton artisan - Auvergne-Rhône-Alpes</title>
                <meta name="description" content="Trouve ton artisan Auvergne-Rhône-Alpes : des professionnels du services à contacter rapidement."/>
                <meta name="keywords" content="artisan, artisan local, artisan services, Auvergne-Rhône-Alpes" />
            </Helmet>
            {/* Affichage de la page */}
            <CategoriePage
                titre="Services"
                idCategorie={2}
            />
        </>
    );

}