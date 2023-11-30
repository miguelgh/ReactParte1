import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {

    const btnMenu = () => {
        var menu = document.getElementById("menu");
        var icono = document.querySelector("#boton-menu span img");

        //agrega la clase "rotar" a la img del ícono
        icono.classList.toggle("rotar");
        //agrega la clase mostrando al menu para que se despliegue a traves de css
        menu.classList.toggle("mostrando");
    }

    return (
        <nav>
            <div className="fondo-boton">
                <button id="boton-menu" onClick={ btnMenu }>
                    <span><img src="img/menu.png" alt="" /></span> menu
                </button>
            </div>   
            <div className="holder">
                <div id="menu">
                    <ul>
                        <li><NavLink to="/" className={ ({ isActive }) => isActive ? "activo" : undefined } >Home</NavLink></li>
                        <li><NavLink to="/nosotros" className={ ({ isActive }) => isActive ? "activo" : undefined }>Nosotros</NavLink></li>
                        <li><NavLink to="/servicios" className={ ({ isActive }) => isActive ? "activo" : undefined }>Servicios</NavLink></li>
                        <li><NavLink to="/novedades" className={ ({ isActive }) => isActive ? "activo" : undefined }>Novedades</NavLink></li>
                        <li><NavLink to="/contacto" className={ ({ isActive }) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;