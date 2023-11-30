import React from 'react';
import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2 className="bloque">Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/ferroviario.jpg" alt="tren" />
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eveniet soluta, praesentium labore modi sapiente hic quisquam recusandae commodi doloribus cum voluptatum harum vel suscipit officiis obcaecati doloremque repellat. Quo.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/terrestre.jpg" alt="tren" />
            <div className="info">
                <h4>Transporte 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eveniet soluta, praesentium labore modi sapiente hic quisquam recusandae commodi doloribus cum voluptatum harum vel suscipit officiis obcaecati doloremque repellat. Quo.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/aereo.jpg" alt="tren" />
            <div className="info">
                <h4>Transporte 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eveniet soluta, praesentium labore modi sapiente hic quisquam recusandae commodi doloribus cum voluptatum harum vel suscipit officiis obcaecati doloremque repellat. Quo.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/maritimo.jpg" alt="tren" />
            <div className="info">
                <h4>Transporte 4</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eveniet soluta, praesentium labore modi sapiente hic quisquam recusandae commodi doloribus cum voluptatum harum vel suscipit officiis obcaecati doloremque repellat. Quo.</p>
            </div>
        </div>
    </main>
    );
}

export default ServiciosPage;