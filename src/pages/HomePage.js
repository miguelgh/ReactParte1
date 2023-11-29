import React from 'react';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
    <main className="holder">
        <div>
            <img className="portada" src="img/home/img01.jpg" alt="avión"/>
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi consectetur iure maiores, id omnis quisquam officiis atque quae nisi laudantium fuga inventore ipsa earum aliquid? Nisi dolore voluptate quod.
                Asperiores architecto rerum iusto consequuntur, atque qui iure cumque quam dolorum voluptates. Vero ullam harum quos nobis maiores rerum dolorem repellat molestias quidem quaerat possimus nulla assumenda, aut, veritatis sapiente.
                Rerum harum saepe est. Atque delectus doloremque recusandae ducimus perferendis quia quam commodi nam molestias voluptates illo amet laudantium ipsam impedit beatae, aliquid fugit eligendi quas dolore deserunt? Quaerat, commodi!</p>
            </section>
            <section className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Gómez - zapatos.com</span>
                </div>
            </section>
        </div>
    </main>
    );
}

export default HomePage;