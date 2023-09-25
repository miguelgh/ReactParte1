import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div ClassName="bloque">
                <h2>Contacto</h2>
                <form action="" method="" ClassName="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre"/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="number" name="telefono" id="telefono"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div ClassName="datos bloque">
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