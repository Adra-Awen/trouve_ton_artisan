import CategoriePage from '../components/CategoriePage';
import React, {useEffect} from 'react';

export default function Services() {
    useEffect(() => {
        document.title = "Services | Trouve ton artisan"
    })  
    return (
        <CategoriePage
            titre="Services"
            idCategorie={2}
        />
    );

}