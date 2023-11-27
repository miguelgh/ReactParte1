import '../styles/components/pages/ContactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div className="bloque">
                <h2>Contacto</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={ formData.nombre } onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" value={ formData.email } onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="number" name="telefono" id="telefono" value={ formData.telefono } onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10" value={ formData.mensaje } onChange={handleChange}></textarea>
                    </p>
                    <p>
                    {sending ? <p>Enviando...</p>: null}
                    {msg ? <p>{msg}</p>: null}
                    </p>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div className="datos bloque">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios:</p><br/>
                    <ul>
                        <li>Telefono: 12345-1234</li>
                        <li>Email: Contacto@transportesx.com.ar</li>
                        <li>Facebook:</li>
                        <li>Twitter:</li>
                        <li>Skype:</li>
                    </ul>
            </div>
        </main>
    );
}

export default ContactoPage;