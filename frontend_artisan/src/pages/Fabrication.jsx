import CategoriePage from '../components/CategoriePage';
import React, {useEffect} from 'react';

export default function Fabrication() {
    useEffect(() => {
        document.title = "Fabrication | Trouve ton artisan"
    })  
    return (
        <CategoriePage
            titre="Fabrication"
            idCategorie={3}
        />
    );

}