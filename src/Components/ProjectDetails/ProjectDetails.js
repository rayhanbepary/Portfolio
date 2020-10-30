import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';
import Footer from '../Footer/Footer';


const ProjectDetails = ({data}) => {

    const {slug} = useParams();
    let project = data.find(project => project.slug === slug);

    if(!project){
        return (
            <div className="error">
                <h3>No such project could be found</h3>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    const {name,title,description,features,technologies,image,liveSite,github} = project;

    const [thumbnail, ...defaultImg] = image;

    return (
        <div className="project-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h3 style={{marginTop: '80px'}}>{name}</h3>
                        <h6>{title}</h6>
                        <p style={{marginTop: '30px'}}>{description}</p>
                    </div>
                </div>
                <div className="row mb-5 mt-2">
                    <div className="col-md-5 offset-md-1">
                        <p><strong>Features:</strong></p>
                        <ul style={{marginLeft: '40px'}}>
                            {
                                features.map(feature => <li>{feature}</li>) 
                            }
                        </ul>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <p><strong>Technologies used:</strong></p>
                        <ul style={{marginLeft: '40px'}}>
                            {
                                technologies.map(technology => <li>{technology}</li>) 
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-1" style={{marginBottom: '70px'}}>
                        <Link to={`/${liveSite}`} target="_blank" className="viewLink"><FiExternalLink className="mr-2" style={{fontSize:"25px"}}/>View Online</Link>
                        <Link to={`/${github}`} target="_blank" className="githubLink"><AiOutlineGithub className="mr-2" style={{fontSize:"25px"}}/>Github</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        {
                            defaultImg.map(img => <img className="preview-img" src={img.url} alt="image"/>)
                        }
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;