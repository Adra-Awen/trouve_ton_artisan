import React from 'react';
import { Helmet } from 'react-helmet-async';

import TopArtisan from '../components/TopArtisan';

import categorie from "../assets/categorie.jpg";
import poster from "../assets/poster.jpg";
import reception from "../assets/reception.jpg";
import recherche from "../assets/recherche.jpg";

function Accueil(){
    {/*carousel : explication des étapes*/}
    const slides = [
        {
            image: recherche,
            texte:"1. Choisir la catégorie dans le menu"
        },
        {
            image:categorie,
            texte:"2. Choisir un artisan"
        },
        {
            image: poster,
            texte:"3. Le contacter via le formulaire"
        },
        {
            image: reception,
            texte:"4. Une réponse sous 48 heures"
        },
    ];

    return (
        <>
            {/* Titre et description de la page pour référencement */}        
            <Helmet>
                <title>Accueil - Trouve ton artisan - Auvergne-Rhône-Alpes</title>
                <meta name="description" content="Trouve ton artisan Auvergne-Rhône-Alpes vous aide à trouver des artisans qualifiés et proches de chez vous et en quelques clics. 
                    Choississez parmi plusieurs catégories de spécialités : bâtiment, services, alimentation et fabrication"/>
                <meta name="keywords" content="artisan, artisan local, bâtiment, alimentation, fabrication, services, Auvergne-Rhône-Alpes"/>
            </Helmet>
            {/* Affichage de la page */}
            <section className="bg-dark py-5">
                <div className="carousel container text-start">
                    <h2 
                        className="h2-categorie fw-bold mb-4">
                        Comment trouver mon artisan ?
                    </h2>
                    <div 
                        id="carouselInfos"
                        className="carousel slide text-center"
                        data-bs-ride="carousel"
                        data-bs-interval="4000">
                            <div className="carousel-inner">

                            {/*Défilement des slides*/}
                            { slides.map(
                                (slide, index) => (
                                    <div key={index} className={`carousel-item ${ index === 0 ? "active" : ""}`}>
                                        <div>
                                            <img
                                                src={slide.image}
                                                alt="illustration des étapes"
                                                className="img-fluid carousel-image mb-3"
                                            />
                                            <p className="text-white mt-0">
                                                {slide.texte}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )} 
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselInfos"
                            data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselInfos"
                            data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"/>
                        </button>

                    </div>
                </div>
            </section>
            <TopArtisan />
        </>
    );
}

export default Accueil;