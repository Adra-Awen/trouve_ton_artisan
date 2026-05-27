import CategoriePage from '../components/CategoriePage';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Fabrication() {
    return (
        <>
        {/* Titre et description de la page pour référencement */}
            <Helmet>
                <title>Fabrication - Trouve ton artisan - Auvergne-Rhône-Alpes</title>
                <meta name="description" content="Trouve ton artisan Auvergne-Rhône-Alpes : des professionnels de la fabrication à contacter rapidement."/>
                <meta name="keywords" content="artisan, artisan local, artisan fabrication, Auvergne-Rhône-Alpes" />
            </Helmet>        
            {/* Affichage de la page */}
            <CategoriePage
                titre="Fabrication"
                idCategorie={3}
            />
        </>
    );

}