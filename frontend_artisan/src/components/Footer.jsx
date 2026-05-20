import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-5 px-3 border-top mt-auto">
            <div className="container">
            
                {/* grille : 1 ligne qui passe en colonne sur mobile et en 3 colonnes sur desktop */}
                <div className="row text-center text-md-start gy-4 align-items-start">
                
                    {/* Colonne 1 : logo */}
                    <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start">
                        <Link to="/accueil" title="Accueil">
                            <img 
                                src={Logo} 
                                alt="Trouve ton artisan ! avec la Région Auvergne-Rhône-Alpes" 
                                style={{
                                    height: 'auto',
                                    width: 'clamp(180px, 18vw, 300px)',
                                    minWidth: '160px',
                                    marginBottom: '1rem'
                                }}
                            />
                        </Link>
                    </div>

                    {/* Colonne 2 : adresse */}
                    <div className="col-12 col-sm-6 col-md-4">
                        <h3 className="h6 fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Adresse</h3>
                        <address className="text-secondary small lh-base m-0">
                            101 cours Charlemagne<br />
                            CS 20033<br />
                            69269 LYON<br />
                            CEDEX 02<br />
                            France<br />
                            <span className="text-dark d-inline-block mt-2">+33 (0)4 26 73 40 00</span>
                        </address>
                    </div>

                    {/* Colonne 3 : liens mentions légales */}
                    <div className="col-12 col-sm-6 col-md-4">
                        <h3 className="h6 fw-bold text-dark mb-3" style={{ fontSize: '1.1rem' }}>Mentions légales</h3>
                        <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                            <li>
                                <Link to="/donnees-personnelles" title="Données personnelles" className="text-decoration-none text-secondary small footer-link">
                                    Données personnelles
                                </Link>
                            </li>
                            <li>
                                <Link to="/accessibilite" title="Accessibilité" className="text-decoration-none text-secondary small footer-link">
                                    Accessibilité
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookies" title="Cookies" className="text-decoration-none text-secondary small footer-link">
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* survol des liens du footer */}
            <style>{`
                .footer-link {
                transition: color 0.2s ease;
                }
                .footer-link:hover {
                color: #00497C !important;
                text-decoration: underline !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;