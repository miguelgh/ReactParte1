import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
    <header>
        <div className="holder">
            <a href="index.html"><img src="img/logo.png" alt="Logo Transportes X"/>
            <h1>Transportes X</h1></a>
        </div>
    </header>
    );
}

export default Header;