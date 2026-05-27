import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function BarreRecherche({ mobile = false, onClose = ()=>{}}) {
    const [recherche, setRecherche] = useState('');
    const [artisans, setArtisans] = useState([]);
    const [resultats, setResultats] = useState([]);
    const location = useLocation();

    // Charger tous les artisans depuis l'API
    useEffect(() => {
        fetch('http://localhost:3000/entreprises')
            .then(response => response.json())
            .then(data => {
                setArtisans(
                    Array.isArray(data)
                        ? data
                        : []
                );
            })

            .catch(error => {
                console.error(
                    'Erreur récupération artisans',
                    error
                );
            });
    }, []);

    // Filtrer pendant la saisie
    useEffect(() => {
        if (!recherche.trim()) {
            setResultats([]);
            return;
        }

        const filtre = artisans.filter(
            artisan =>
                artisan.nom
                    .toLowerCase()
                    .includes(
                        recherche.toLowerCase()
                    )
        );
        setResultats(
            filtre.slice(0,5)
        );
    }, [recherche, artisans]);

    // Fermer la recherche quand on change de page
    useEffect(() => {
        setRecherche('');
        setResultats([]);   
    }, [location]);

    return (
        <div className="position-relative w-100">
            <input
                type="text"
                placeholder="Votre recherche..."
                value={recherche}
                onChange={(e)=>{
                    setRecherche(
                        e.target.value
                    );
                }}
                className={
                    mobile
                    ? `form-control border-0 rounded-3 w-100 search-input-mobile`
                    : `form-control form-control-sm border-0 rounded-3 search-input-desktop`
                }
            />
            
            {/*Proposition du nom de l'artisan et de sa page au click*/}
            {
                resultats.length > 0 && (
                <div className="position-absolute top-100 start-0 bg-white shadow rounded mt-1 w-100 z-3 p-3">
                    { resultats.map(
                        artisan => (
                        <Link
                            key={ artisan.id_entreprise }
                            to={`/${ artisan.nom .trim() .toLowerCase() .normalize("NFD") .replace(/[\u0300-\u036f]/g,"") .replace(/[^a-z0-9\s-]/g,"") .replace(/\s+/g,"-") }`} 
                            className="d-block p-2 text-dark text-decoration-none border-bottom result-search"
                            onClick={()=>{
                                setRecherche('');
                                setResultats([]);
                                onClose();
                            }}
                        >
                            {artisan.nom}
                        </Link>
                        ))
                    }
                </div>
                )
            }
        </div>
    );
}

export default BarreRecherche;