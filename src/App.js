import React from 'react'
import './App.scss';
import logo from './assets/logo-nepesc.png'
import {Footer} from './components/Footer.js'
import {Navbar} from './components/Navbar.js'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md col-config">
            <img
            height={200}
            width={200}
            src={logo}
            alt="Nepesc's logo"/>
          </div>
          <div class="col-md col-config">
            <h1>Nepesc</h1>
            <p>
            Nós somos um Grupo de Pesquisa do CNPQ <abbr>organizado
            horizontalmente </abbr>
            que aplica conceitos da <abbr>economia solidária</abbr> em
            Araraquara.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
