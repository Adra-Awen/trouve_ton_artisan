import CategoriePage from '../components/CategoriePage';
import React, {useEffect} from 'react';

export default function Batiment() {
    useEffect(() => {
        document.title = "Bâtiment | Trouve ton artisan"
    })
    return (
        <CategoriePage
            titre="Bâtiment"
            idCategorie={1}
        />
    );

}