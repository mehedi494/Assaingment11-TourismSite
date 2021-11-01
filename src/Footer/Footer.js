import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-box">
                    <div className="box-1">
                        <h2>Available </h2>
                        <Link to="#"><h4>More Us</h4></Link>
                        <Link to="#"><h4>About Us</h4></Link>
                        <Link to="#"><h4>Contact Us</h4></Link>

                    </div>
                    <div className="box-2">
                        <h2>Known To us </h2>
                        <Link to="#"><h4>More Us</h4></Link>
                        <Link to="#"><h4>About Us</h4></Link>
                        <Link to="#"><h4>Contact Us</h4></Link>
                    </div>
                    <div className="box-3">
                        <h4>Subscribe FOr latest News</h4>
                        <input type="text" placeholder="Your Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
                <div className="copyright"><p>All Right Reserve  @Mh Munna 2021</p></div>
            </div>
        </div>
    );
};

export default Footer;