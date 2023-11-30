import React from 'react';
import '../../styles/components/pages/NovedadesPage.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return(
        <div className='novedades'>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div className='infoNovedad'>
                <img src={imagen} alt='No se pudo cargar la imagen' />
                <div className='textoNovedad' dangerouslySetInnerHTML={{ __html: body}} />
            </div>
        </div>
    );
}

export default NovedadItem;