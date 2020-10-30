import React from 'react';
import { Link } from "react-router-dom";
import Rayhan from "../../img/final.png";

const Hero = () => {
    return (
        <div className="hero-wrapper">
           <div className="container">
               <div className="row">
                   <div className="col-md-5 intro">
                       <div>
                            <h1>Md. Rayhan Bepary</h1>
                            <h4 style={{fontWeight: 400}}>Frontend Developer</h4>
                            <p style={{padding: '5px 0 20px 0'}}>An experienced and enthusiastic frontend developer with hands of skills in various technology, software, and tools. I can easily adapt to new technology as needed.</p>
                            <Link className="download-resume" to="Resume-of-Rayhan-Bepary.pdf" target="_blank" download>Download Resume</Link>
                       </div>
                   </div>
                   <div className="col-md-7">
                        <img className="hero-img" src={Rayhan} alt=""/>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Hero;