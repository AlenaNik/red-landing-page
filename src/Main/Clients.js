import React from 'react';
import ono from "../assets/images/ono@2x.png";
import bbva from "../assets/images/BBVA@2x.png";
import samsung from "../assets/images/Samsung@2x.png";
import roca from "../assets/images/Roca@2x.png";
import carrefour from "../assets/images/carrefour@2x.png";
import nestle from "../assets/images/nestle@2x.png";
import nhhotels from "../assets/images/nh hoteles@2x.png";
import mapfre from "../assets/images/Mapfre@2x.png";
import ebay from "../assets/images/ebay@2x.png";
import telefonica from "../assets/images/telefonica@2x.png";

const Clients = () => {
    return (
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
    )
}
export default Clients
