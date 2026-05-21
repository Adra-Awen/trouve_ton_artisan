import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Batiment from './pages/Batiment';

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;