import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil'
import Batiment from './pages/Batiment';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import Services from './pages/Services';
import Artisan from './pages/Artisan';
import TopArtisan from './components/TopArtisan';
import DonneesPersonnelles from './pages/DonneesPersonnelles';
import Cookies from './pages/Cookies';
import Accessibilite from './pages/Accessibilite';
import Page404 from './pages/NotFound'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-3 text-center">
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/batiment" element={<Batiment />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artisan/:id" element={<Artisan />} />
          <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;