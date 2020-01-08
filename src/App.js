import React from 'react';
import './App.css';

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
    <header className="main-section">
        <div className="header-icons">
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="130.999" height="30.008" viewBox="0 0 130.999 30.008"
             fill="#fff">
            <g transform="translate(-118 -64.999)">
                <path className="a"
                      d="M233.555,94.67a6.613,6.613,0,0,1-1.885-.972l1.919-3.323a5.38,5.38,0,0,0,.876.537,2.36,2.36,0,0,0,1.042.235,1.781,1.781,0,0,0,1.273-.487A4.73,4.73,0,0,0,237.755,89l.463-1.275-7.077-15.573h5.423l3.869,9.933,3.505-9.933H249l-6.35,15.639q-.529,1.31-1.041,2.6a10.526,10.526,0,0,1-1.257,2.316,6.043,6.043,0,0,1-1.819,1.66,5.213,5.213,0,0,1-2.695.638A7.294,7.294,0,0,1,233.555,94.67Zm-10.9-6.718a4.684,4.684,0,0,1-1.819-1.343,5.192,5.192,0,0,1-.993-2.063,11.266,11.266,0,0,1-.3-2.686v-5.94H217.1V72.129h2.447v-4.52h4.763v4.52h4l1.654,3.793h-5.655V82.13a2.99,2.99,0,0,0,.445,1.762,1.613,1.613,0,0,0,1.406.62,2.892,2.892,0,0,0,1.256-.252,6.173,6.173,0,0,0,.993-.588l1.918,2.955a7.646,7.646,0,0,1-4.894,1.812A6.992,6.992,0,0,1,222.653,87.952Zm-44.838.107a24.223,24.223,0,0,1-2.927-.771V65.507h4.762v7.819a4.47,4.47,0,0,1,1.8-1.108,6.754,6.754,0,0,1,2.265-.4,6.545,6.545,0,0,1,2.943.638,6.32,6.32,0,0,1,2.166,1.729,7.861,7.861,0,0,1,1.34,2.516,10.343,10.343,0,0,1-.149,6.564,7.608,7.608,0,0,1-1.769,2.751,8.036,8.036,0,0,1-2.843,1.778,10.826,10.826,0,0,1-3.837.638A18.377,18.377,0,0,1,177.815,88.06Zm2.6-11.227a3.516,3.516,0,0,0-.761,2.367v4.865a3.942,3.942,0,0,0,.877.252,8.158,8.158,0,0,0,1.339.083,3.609,3.609,0,0,0,2.927-1.24,4.891,4.891,0,0,0,1.042-3.255,5.785,5.785,0,0,0-.182-1.444,4.164,4.164,0,0,0-.545-1.258,2.93,2.93,0,0,0-.943-.906,2.652,2.652,0,0,0-1.406-.353A2.92,2.92,0,0,0,180.411,76.833ZM142.383,87.809a7.734,7.734,0,0,1-2.7-1.73A7.305,7.305,0,0,1,138,83.411a9.814,9.814,0,0,1-.579-3.44,9.342,9.342,0,0,1,.546-3.172,7.918,7.918,0,0,1,1.57-2.669,7.642,7.642,0,0,1,2.514-1.83,7.968,7.968,0,0,1,3.373-.687,7.683,7.683,0,0,1,3.307.671,6.845,6.845,0,0,1,2.4,1.862A8.108,8.108,0,0,1,152.6,77a12.674,12.674,0,0,1,.5,3.642v.8H142.052a3.019,3.019,0,0,0,1.107,2.233,4.3,4.3,0,0,0,2.96.956,7.011,7.011,0,0,0,3.01-.553,10.3,10.3,0,0,0,1.687-.957l1.951,3.055c-.176.112-.441.3-.794.553a7.315,7.315,0,0,1-1.372.755,12.233,12.233,0,0,1-2,.653,11.115,11.115,0,0,1-2.646.286A9.738,9.738,0,0,1,142.383,87.809Zm1.554-12.15a3.3,3.3,0,0,0-1.041.721,3.135,3.135,0,0,0-.629.958,2.666,2.666,0,0,0-.214,1.022H148.6a2.853,2.853,0,0,0-.2-1.022,3.042,3.042,0,0,0-.6-.958,3.2,3.2,0,0,0-.992-.721,3.269,3.269,0,0,0-1.422-.285A3.491,3.491,0,0,0,143.937,75.659Zm15.69,12.132a6.245,6.245,0,0,1-2.15-1.628,7.905,7.905,0,0,1-1.438-2.549,10.066,10.066,0,0,1-.529-3.373,8.674,8.674,0,0,1,.744-3.71,7.871,7.871,0,0,1,4.531-4.195,8.286,8.286,0,0,1,2.828-.52,7.817,7.817,0,0,1,1.752.152,12.907,12.907,0,0,1,1.29.384V65.507h4.73V87.891h-4.432l-.2-1.577a5.915,5.915,0,0,1-1.868,1.46,5.6,5.6,0,0,1-2.6.587A6.284,6.284,0,0,1,159.627,87.791Zm1.687-10.638a4.887,4.887,0,0,0-1.009,3.187,4.505,4.505,0,0,0,.827,2.8,2.912,2.912,0,0,0,2.48,1.092,3.071,3.071,0,0,0,1.372-.286,2.808,2.808,0,0,0,.958-.755,2.874,2.874,0,0,0,.545-1.108,5.162,5.162,0,0,0,.166-1.308v-4.3a3.612,3.612,0,0,0-1.075-.436,6.468,6.468,0,0,0-1.439-.135A3.438,3.438,0,0,0,161.313,77.153Zm-30.6,10.788-4.576-9.976a4.453,4.453,0,0,0,3.948-4.425,3.426,3.426,0,0,0-1.316-2.74l-.005,0-.005,0a3.38,3.38,0,0,0-1.651-.635h-6.4l-1.9-4.314h9.031a10.266,10.266,0,0,1,3.178.47,6.661,6.661,0,0,1,2.4,1.363,6.072,6.072,0,0,1,1.538,2.24,8.268,8.268,0,0,1,.543,3.127,7.086,7.086,0,0,1-3.441,6.295l-.166.1.094.172,4.568,8.342ZM201.47,87.9V65.51h4.759V87.9Zm8.29-.01V72.15h4.76V87.89Zm-16.55,0V72.15h4.76V87.89Zm16.235-20.157a2.695,2.695,0,1,1,2.695,2.735A2.714,2.714,0,0,1,209.445,67.733Zm-16.553,0a2.694,2.694,0,1,1,2.695,2.735A2.714,2.714,0,0,1,192.893,67.733Z"/>
                <path className="b" d="M118,85.926a2.695,2.695,0,1,1,2.694,2.735A2.715,2.715,0,0,1,118,85.926"/>
            </g>
        </svg>
      <div>
        <svg className="burger" xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 23 12" fill="#fff">
          <g transform="translate(-1137 -66)">
            <rect className="a" width="23" height="2" transform="translate(1137 66)"/>
            <rect className="a" width="17" height="2" transform="translate(1137 71)"/>
            <rect className="a" width="23" height="2" transform="translate(1137 76)"/>
          </g>
        </svg>
      </div>
      </div>
        <h2 className="header-title">
            Discover
        </h2>
        <h1 className="header-call-to-action">Our new
            <br/>
            look</h1>
    </header>
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
