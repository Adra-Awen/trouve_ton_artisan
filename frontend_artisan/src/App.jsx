import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Batiment from './pages/Batiment';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import Services from './pages/Services';
import Artisan from './pages/Artisan';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container my-3 text-center">
        <Routes>
          <Route 
              path="/" 
              element={
                <div className="text-center py-5">
                </div>
              } 
          />
          <Route path="/batiment" element={<Batiment />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artisan/:id" element={<Artisan />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;