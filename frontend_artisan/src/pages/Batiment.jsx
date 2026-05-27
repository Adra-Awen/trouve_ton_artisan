import CategoriePage from '../components/CategoriePage';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Batiment() {
    return (
        <>
            {/* Titre et description de la page pour référencement */}
            <Helmet>
                <title>Bâtiment - Trouve ton artisan - Auvergne-Rhône-Alpes</title>
                <meta name="description" content="Trouve ton artisan Auvergne-Rhône-Alpes : des professionnels du bâtiment à contacter rapidement."/>
                <meta name="keywords" content="artisan, artisan local, artisan bâtiment, Auvergne-Rhône-Alpes" />
            </Helmet>  
            {/* Affichage de la page*/}
            <CategoriePage
                titre="Bâtiment"
                idCategorie={1}
            />
        </>
    );
}