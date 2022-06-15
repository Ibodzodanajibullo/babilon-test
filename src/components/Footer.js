import React from "react";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__adr">
            <h1 className="footer__logo">ahaZ</h1>
            <p>lorem ipsum onsectetur solor elit</p>
                    <img src={facebook} width="40px" height="40px"/>
                    <img src={instagram} width="40px" height="40px"/>
                    <img src={linkedin} width="40px" height="40px"/>
            </div>
            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">Location</h2>

                    <ul className="nav__ul">
                        <address>765 5th Street,<br/>
                            21st Floor, New York, USA
                        </address>
                    </ul>
                </li>

                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Links</h2>

                    <ul className="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">About Us</a>
                        </li>

                        <li>
                            <a href="#">Our Sports</a>
                        </li>

                        <li>
                            <a href="#">News</a>
                        </li>

                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#">Terms of Conditions</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Footer;