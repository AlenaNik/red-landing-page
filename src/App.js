import React from 'react';
import './App.css';

// Imports images
import bg from './assets/images/bg-image@2x.png';
// logos //
import ono from './assets/images/ono@2x.png';
import bbva from './assets/images/BBVA@2x.png';
import samsung from './assets/images/Samsung@2x.png';
import roca from './assets/images/Roca@2x.png';
import carrefour from './assets/images/carrefour@2x.png';
import nestle from './assets/images/nestle@2x.png';
import nhhotels from './assets/images/nh hoteles@2x.png';
import mapfre from './assets/images/Mapfre@2x.png';
import ebay from './assets/images/ebay@2x.png';
import telefonica from './assets/images/telefonica@2x.png';

// footer //
import left from './assets/images/Footer-left-logo@2x.png';
import right from './assets/images/Footer-logo@2x.png';

function App() {
  return (
    <div className="App">
    <header className="main-section">
      <img src={bg} alt=""/>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="#fff">
          <g transform="translate(-1137 -66)">
            <rect className="a" width="23" height="2" transform="translate(1137 66)"/>
            <rect className="a" width="17" height="2" transform="translate(1137 71)"/>
            <rect className="a" width="23" height="2" transform="translate(1137 76)"/>
          </g>
        </svg>
      </div>
    </header>
      <main role="main">
        <h1>Redvolution is coming</h1>
        <h2>Creamos una nueva marca que por fín refleja lo que llevamos haciendo con pasión toda la vida</h2>
        <article className="article-left">
          Team spirit and an inspiring working atmosphere are key. Reflecting this, we work with a team of UX and interactive designers, developers, project managers, digital consultants, thinkers and innovators all together in one space.
        </article>
        <article className="article-right">
          Digital consultants, thinkers and innovators all together in one space. In an environment that encourages flat hierarchies, identification and participation, bringing the digital world one step further.
        </article>
      </main>
  <section>
    <p className="clients-text-middle">
      We love our clients
    </p>
    <ul className="list-of-clients">
        <li>
          <img src={ono} alt="our client Ono"/>
        </li>
        <li>
          <img src={bbva} alt="our client BBVA"/>
        </li>
          <li>
            <img src={samsung} alt="our client Samsung"/>
          </li>
          <li>
            <img src={roca} alt="our client Roca"/>
          </li>
          <li>
            <img src={carrefour} alt="our client Carrefour"/>
          </li>
          <li>
            <img src={nestle} alt="our client Nestle"/>
          </li>
          <li>
            <img src={nhhotels} alt="our client NH Hotels"/>
          </li>
          <li>
            <img src={mapfre} alt="our client Mafre"/>
          </li>
          <li>
            <img src={ebay} alt="our client Ebay"/>
          </li>
          <li>
            <img src={telefonica} alt="our client Telefonica"/>
          </li>
    </ul>
    <div>

    </div>
  </section>
      <footer>
        <img src={left} alt="red round logo"/>
        <p>© 2015 Redbility</p>
        <img src={right} alt="black simple logo"/>
      </footer>
    </div>
  );
}

export default App;
