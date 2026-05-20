import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//Importation du logo et de l'icône de recherche
import Logo from '../assets/logo.png';
import loupe from '../assets/loupe.png';

const Header = () => {
    // State pour gérer l'ouverture du menu burger et de la barre de recherche en responsive
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    // Fonction pour basculer l'état du menu burger
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour basculer l'état de la barre de recherche
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="bg-header py-3 px-3 position-relative">
            <style>{`
                .header-link {
                font-size: 1.1rem;
                transition: color 0.2s ease, font-weight 0.1s ease;
                }
                .header-link:hover, 
                .header-link.active {
                font-weight: 600 !important;
                color: #00497C !important;
                }
            `}</style>
            <div className="container d-flex align-items-center">
            
                {/* Partie gauche : Le Logo / Titre */}
                <div className="d-flex align-items-center">
                    <Link to="/accueil" title="Accueil">
                        <img 
                                src={Logo} 
                                alt="Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes" 
                                style={{
                                    height: 'auto',
                                    maxHeight: 'clamp(150px, 10vw, 320px)', // Ajustement dynamique de la taille du logo 
                                    minWidth: '140px',
                                }}
                            />
                    </Link>
                    
                    <style>{`
                        @media (min-width: 992px) {
                            img {
                                --logo-height: 200px;
                            }
                        }
                        @media (min-width: 768px) {
                            img {
                                --logo-height: 80px;
                            }
                        }
                    `}</style>
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
                    <div className="position-relative d-flex align-items-center">
                    <input 
                        type="text" 
                        className="form-control form-control-sm border-0 rounded-3 bg-light-grey" 
                        style={{ width: '180px', backgroundColor: '#E5E9EC', paddingRight: '30px' }} 
                    />
                    <img 
                        src={loupe} 
                        alt="" 
                        className="position-absolute end-0 me-2" 
                        style={{ maxHeight: '16px', pointerEvents: 'none' }}
                    />
                    </div>
                    </div>

                    {/* Responsive : Icône de recherche */}
                    <button className="btn p-1 border-0 d-lg-none" onClick={toggleSearch} aria-label="Rechercher">
                        <span style={{ fontSize: '1.4rem', color: '#00497C' }}>
                            <img 
                                src={loupe} 
                                alt="Rechercher icône loupe" 
                                className="img-fluid" 
                                style={{ maxHeight: '24px', width: 'auto' }}
                            />
                        </span>
                    </button>

                    {/* Responsive : Menu burger */}
                    <button 
                        className="btn p-1 border-0 d-flex d-lg-none flex-column align-items-center" 
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <span style={{ fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>
                            {isMenuOpen ? '✕' : '☰'} {/*Change l'icône en fonction de l'état du menu*/}
                        </span>
                        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 'normal', marginTop: '-1px' }}>
                            {isMenuOpen ? 'Fermer' : 'Menu'}</span>
                    </button>
                </div>
            </div>

            {/* Responsive : Barre de recherche */}
            {isSearchOpen && (
                <div 
                    className="position-absolute start-0 w-100 bg-header border-top d-lg-none shadow-lg p-3" 
                    style={{ top: '100%', zIndex: 1050, backgroundColor: '#F8FBFD' }}
                >
                    <div className="d-flex align-items-center gap-2 container">
                        <span className="text-secondary small">Rechercher</span>
                        <div className="position-relative d-flex align-items-center flex-grow-1">
                            <input 
                                type="text" 
                                placeholder="Votre recherche..."
                                className="form-control border-0 rounded-3 w-100" 
                                style={{ backgroundColor: '#E5E9EC', paddingRight: '35px' }} 
                                autoFocus // Ouverture automatique du clavier sur mobile
                            />
                            <img src={loupe} alt="" className="position-absolute end-0 me-3" style={{ maxHeight: '18px' }} />
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