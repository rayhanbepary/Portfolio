import React from 'react';
import { Link } from 'react-router-dom';
import { GoCloudDownload } from 'react-icons/go';
import MyImage from '../../img/final2.png';


const Resume = () => {
    return (
        <div className="resume-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{marginTop: '50px'}}>
                        <Link to="Resume-of-Rayhan-Bepary.pdf" target="_blank" download>Download Resume <GoCloudDownload/></Link>
                    </div>
                </div>
                <div className="resume">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="resume-img">
                                <img style={{ width: '100%',borderRadius:'5px' }} src={MyImage} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2>Md. Rayhan Bepary</h2>
                            <h4>Frontend Developer</h4>
                        </div>
                        <div className="col-md-3 text-right contactInfo">
                            <p>Dhaka-1000, Bangladesh</p>
                            <p>+880 1986-362426</p>
                            <p>rayhanbepary73@gmail.com</p>
                            <p><Link to="linkedIn" target="_blank">linkedin.com/in/rayhan-bepary/</Link> </p>
                            <p><Link to="github" target="_blank">github.com/rayhanbepary/</Link> </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-9 offset-md-3">
                            <div className="objective">
                                <h4 style={{textDecoration: 'underline',marginTop: '20px'}}>OBJECTIVE</h4>
                                <p>Front End Developer with 1 years of experience , experience in full stack hand code experience in Web Applications development using an array of technologies like HTML5, CSS3, JavaScript, React, Redux, CLI, NodeJS, ExpressJS, Mongodb, AJAX, JSON. Expert knowledge of the UI design process and deliverables throughout the development lifecycle. Comfortable with Object Oriented JavaScript programming.</p>
                            </div>
                            <div className="skills">
                                <h4 style={{textDecoration: 'underline',marginTop: '20px'}}>PROGRAMMING SKILLS</h4>
                                <p><strong>Expertise:</strong> Javascript, ES6, React, Redux, Material UI, HTML5, CSS3, Bootstrap, React Bootstrap, Mongodb , Node JS, Express JS, JSON, AJAX</p>
                                <p><strong>Comfortable:</strong> SCSS, Graphql, Gatsby, Wordpress</p> 
                                <p><strong>Tools:</strong> npm, git, Chrome Dev tools, Visual studio, firebase, netlify, heroku, Photoshop, Adobe xd, Illustrator</p>
                            </div>
                            <div className="projects-in-resume">
                                <h4 style={{textDecoration: 'underline',marginTop: '20px'}}>PROJECTS</h4>
                                <div className="project-one">
                                    <h5 style={{marginTop: '20px'}}>Creative Agency</h5>
                                    <p><strong>Features:</strong></p>
                                    <ul>
                                        <li>Service selling application</li>
                                        <li>User can login with google</li>
                                        <li>Available user dashboard</li>
                                        <li>User can order service</li>
                                        <li>User can see which services he/she already ordered</li>
                                        <li> User can give review</li>
                                        <li>User can send message via contact form</li>
                                        <li>Available admin dashboard</li>
                                        <li>Admin can see the list of all order of services</li>
                                        <li>Admin can change order status</li>
                                        <li>Admin can add new service</li>
                                        <li>Admin can make new admin</li>
                                    </ul>
                                    <p style={{marginBottom: 0}}><strong>Technologies:</strong></p>
                                    <p>Javascript, ES6, React, CSS3, Bootstrap, Node JS, Mongodb, Express JS, Firebase, Heroku</p>
                                    <Link to="creativeAgencyLive" target="_blank">Live site |</Link>
                                    <Link to="creativeAgencyGit" target="_blank"> Github</Link>
                                </div>

                                <div className="project-two">
                                    <h5 style={{marginTop: '30px'}}>Volunteer Network</h5>
                                    <p><strong>Features:</strong></p>
                                    <ul style={{marginLeft: '40px'}}>
                                        <li>User can login with google</li>
                                        <li>User can register event</li>
                                        <li>Available user dashboard</li>
                                        <li>User can see all of his/her registered event</li>
                                        <li>User can cancel his/her registered event</li>
                                        <li>Working registration form</li>
                                        <li>Available admin dashboard</li>
                                        <li>Admin can see the list of all registered volunteers</li>
                                        <li>Admin can add new event</li>
                                    </ul>
                                    <p style={{marginBottom: 0}}><strong>Technologies:</strong></p>
                                    <p>Javascript, React, CSS3, Bootstrap, Node JS, Mongodb, Express JS. Firebase, Heroku</p>
                                    <Link to="volunteerNetworkLive" target="_blank">Live site |</Link>
                                    <Link to="volunteerNetworkGit" target="_blank"> Github</Link>
                                </div>

                                <div className="project-three">
                                    <h5 style={{marginTop: '30px'}}>Doctors Portal</h5>
                                    <p><strong>Features:</strong></p>
                                    <ul style={{marginLeft: '40px'}}>
                                        <li>User can login with google</li>
                                        <li>User can book doctors appointment</li>
                                        <li>Available user dashboard</li>
                                        <li>User can see all of his/her appointment</li>
                                        <li>Available admin dashboard</li>
                                        <li>Admin can see the list of all patients</li>
                                        <li>Admin can add doctor</li>
                                    </ul>
                                    <p style={{marginBottom: 0}}><strong>Technologies:</strong></p>
                                    <p>Javascript, React, CSS3, Bootstrap, Node JS, Mongodb, Express JS. Firebase, Heroku</p>
                                    <Link to="doctorsPortalLive" target="_blank">Live site |</Link>
                                    <Link to="doctorsPortalGit" target="_blank"> Github</Link>
                                </div>
                            </div>
                            <div className="education">
                                <h4 style={{textDecoration: 'underline', marginTop: '20px'}}>EDUCATION QUALIFICATION</h4>
                                <p>BSS in Social Welfare & Research, University of Dhaka</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;