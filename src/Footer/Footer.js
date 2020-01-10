import React from 'react';
import right from "../assets/images/Footer-logo@2x.png";
import left from "../assets/images/Footer-left-logo@2x.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright">
                <img className="footer-logo" src={right} alt="black simple logo"/>
                <p>© 2015 Redbility</p>
            </div>
            <img className="footer-logo" src={left} alt="red round logo"/>
        </footer>
    )
}

export default Footer;
