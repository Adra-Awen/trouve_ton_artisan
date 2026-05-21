import React from 'react';
import ArtisanCard from '../components/ArtisanCard';
// Importe l'image de ton boulanger (ou utilise un lien/avatar)
import BoulangereImg from '../assets/boulangere.png'; 

const Alimentation = () => {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Artisans de l'Alimentation</h2>
      
      {/* Grille pour afficher plusieurs cartes */}
      <div className="row">
        <div className="col-12 col-md-6">
          
          {/* 🎯 On utilise notre modèle ici ! */}
          <ArtisanCard 
            name="Au pain chaud"
            job="Boulanger"
            location="Montélimar"
            rating={5}
            image={arttisan.image}
          />

        </div>
      </div>
    </div>
  );
};

export default Alimentation;