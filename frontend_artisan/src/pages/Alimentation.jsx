import CategoriePage from '../components/CategoriePage';
import React, {useEffect} from 'react';

export default function Alimentation() {
    useEffect(() => {
        document.title = "Alimentation | Trouve ton artisan"
    })
    return (
        <CategoriePage
            titre="Alimentation"
            idCategorie={4}
        />
    );

}