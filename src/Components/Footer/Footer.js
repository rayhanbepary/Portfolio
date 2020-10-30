import React from 'react';
import { FaLinkedinIn, FaFacebookF,FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className={`${window.location.pathname === '/' ? 'footer-wrapper' : 'contact-footer'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link className="social-link" to="/linkedIn" target="_blank"><FaLinkedinIn/></Link>
                        <Link className="social-link" to="/github" target="_blank"><FaGithub/></Link>
                        <Link className="social-link" to="/facebook" target="_blank"><FaFacebookF/></Link>
                    </div>
                    <div className="col-md-6 text-right">
                        <span>&copy; {new Date().getFullYear()} All rights reserved by Rayhan Bepary</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;