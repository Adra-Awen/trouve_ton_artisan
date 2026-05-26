import React from 'react';

import TopArtisan from '../components/TopArtisan';

import categorie from "../assets/categorie.jpg";
import poster from "../assets/poster.jpg";
import reception from "../assets/reception.jpg";
import recherche from "../assets/recherche.jpg";

// carousel : explication des étapes
function Accueil(){
    const slides = [
        {
            image: recherche,
            texte:"Choisir la catégorie dans le menu"
        },
        {
            image:categorie,
            texte:"Choisir un artisan"
        },
        {
            image: poster,
            texte:"Le contacter via le formulaire"
        },
        {
            image: reception,
            texte:"Une réponse sous 48 heures"
        },
    ];

    return (
        <>
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