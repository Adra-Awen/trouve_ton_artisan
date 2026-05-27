import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

//Importation du logo et de l'icône de recherche
import Logo from '../assets/Logo.png';
import loupe from '../assets/loupe.png';

//Importation de la barre de recherche
import BarreRecherche from './BarreRecherche';

const Header = () => {
    const location = useLocation(); // Hook pour obtenir le chemin actuel

    // State pour gérer l'ouverture du menu burger et de la barre de recherche en responsive
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    // Fonction pour basculer l'état du menu bugrger
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour basculer l'état de la barre de recherche
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="bg-header py-3 px-3 position-relative">
            <div className="container d-flex align-items-center">
            
                {/* Partie gauche : Le Logo / Titre */}
                <div className="d-flex align-items-center">
                    <Link to="/" title="Accueil">
                        <img 
                                src={Logo} 
                                alt="Logo Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes"
                                className="logo-header" 
                            />
                    </Link>
                </div>

                {/* Partie centrale : Menu Desktop*/}
                <nav className="d-none d-lg-flex align-items-center gap-4 ms-auto me-5">
                    {/* Menu avec liens actifs en évidence*/}
                    <Link to="/batiment" title="Bâtiment" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/batiment' ? 'active' : ''}`}>Bâtiment</Link>
                    <Link to="/services" title="Services" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                    <Link to="/fabrication" title="Fabrication" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/fabrication' ? 'active' : ''}`}>Fabrication</Link>
                    <Link to="/alimentation" title="Alimentation" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/alimentation' ? 'active' : ''}`}>Alimentation</Link>
                </nav>

                {/* Partie droite : Recherche + Menu Burger */}
                <div className="d-flex align-items-center gap-3 ms-auto ms-lg-0 me-lg-3">
                    
                    {/* Desktop : Barre de recherche */}
                    <div className="d-none d-lg-flex align-items-center gap-2">
                        <span className="text-secondary small">Rechercher</span>
                        <BarreRecherche/>
                    </div>

                    {/* Responsive : Icône de recherche */}
                    <button className="btn p-1 border-0 d-lg-none" onClick={toggleSearch} aria-label="Rechercher">
                        <span>
                            <img 
                                src={loupe} 
                                alt="Rechercher icône loupe" 
                                className="img-fluid search-icon-mobile" 
                            />
                        </span>
                    </button>

                    {/* Responsive : Menu burger */}
                    <button 
                        className="btn p-1 border-0 d-flex d-lg-none flex-column align-items-center" 
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <span className="burger-icon">
                            {isMenuOpen ? '✕' : '☰'} {/*Change l'icône en fonction de l'état du menu*/}
                        </span>
                        <span className="burger-label">
                            {isMenuOpen ? 'Fermer' : 'Menu'}</span>
                    </button>
                </div>
            </div>

            {/* Responsive : Barre de recherche */}
            {isSearchOpen && (
                <div 
                    className="position-absolute start-0 w-100 border-top d-lg-none p-3" 
                >
                    <div className="d-flex align-items-center gap-2 container">
                        <span className="text-secondary small">Rechercher</span>
                        <div className="flex-grow-1">
                            <BarreRecherche mobile onClose={() => setIsSearchOpen(false)}/>
                        </div>
                    </div>
                </div>
            )}

            {/* Responsive : Menu déroulant */}
            {isMenuOpen && (
                <div className="position-absolute top-100 start-0 w-100 bg-header border-top d-lg-none shadow-sm z-3">
                    <nav className="d-flex flex-column p-3 gap-3">
                        <Link to="/batiment" title="Bâtiment" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/batiment' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Bâtiment</Link>
                        <Link to="/services" title="Services" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link to="/fabrication" title="Fabrication" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/fabrication' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Fabrication</Link>
                        <Link to="/alimentation" title="Alimentation" className={`text-decoration-none text-dark fw-medium header-link ${location.pathname === '/alimentation' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Alimentation</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;