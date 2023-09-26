import React from 'react';
import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (props) => {
    return (
        <main className="holder">
        <div className="bloque">
        <h2>Novedades</h2>
            <div className="novedades">
                <h3>Titulo</h3>
                <h4>Subtitulo</h4>
                <p>Descripción - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid pariatur, vero quasi.</p>
                <hr/>
            </div>
        </div>
    </main>
    );
}

export default NovedadesPage;