import React from 'react'
import './App.css';
import Header from './Header'
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

// footer images //
import left from './assets/images/Footer-left-logo@2x.png';
import right from './assets/images/Footer-logo@2x.png';


function App() {

  return (
    <div className="App">
       <Header/>
      <main role="main">
          <h1 className="main-title"><strong> Red </strong> volution is coming</h1>
        <h2 className="main-subtitle">Creamos una nueva marca que por fín refleja lo que llevamos haciendo con pasión toda la vida.</h2>
           <div className="articles">
          <article className="article-left">
          Team spirit and an inspiring working atmosphere are key. Reflecting this, we work with a team of UX and interactive designers, developers, project managers, digital consultants, thinkers and innovators all together in one space.
        </article>
        <article className="article-right">
          Digital consultants, thinkers and innovators all together in one space. In an environment that encourages flat hierarchies, identification and participation, bringing the digital world one step further.
        </article>
           </div>
      </main>
  <section className="container-clients">
    <p className="clients-text-middle">
      We love our clients
    </p>
    <ul className="list-of-clients">
        <li className="client-item">
          <img className="client-img" src={ono} alt="our client Ono"/>
        </li>
        <li className="client-item">
          <img className="client-img" src={bbva} alt="our client BBVA"/>
        </li>
          <li className="client-item">
            <img className="client-img" src={samsung} alt="our client Samsung"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={roca} alt="our client Roca"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={carrefour} alt="our client Carrefour"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={nestle} alt="our client Nestle"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={nhhotels} alt="our client NH Hotels"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={mapfre} alt="our client Mafre"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={ebay} alt="our client Ebay"/>
          </li>
          <li className="client-item">
            <img className="client-img" src={telefonica} alt="our client Telefonica"/>
          </li>
    </ul>
    <div>

    </div>
  </section>
      <footer>
        <div className="footer-copyright">
        <img className="footer-logo" src={right} alt="black simple logo"/>
        <p>© 2015 Redbility</p>
        </div>
            <img className="footer-logo" src={left} alt="red round logo"/>
      </footer>
    </div>
  );
}

export default App;
