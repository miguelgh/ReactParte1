import React, { useEffect, useState } from 'react';
import '../styles/components/pages/NovedadesPage.css';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargaNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargaNovedades();
    }, []);

    return (
        <main className="holder">
            <div className="bloque">
                <h2>Novedades</h2>
                {loading ? (<p>Cargando...</p>
                ):(
                    novedades.map(item => 
                    <NovedadItem key={item.id}
                        title={item.titulo} 
                        subtitle={item.subtitulo}
                        imagen={item.imagen}
                        body={item.cuerpo} 
                    />)
                )}
            </div>
        </main>
    );
}

export default NovedadesPage;