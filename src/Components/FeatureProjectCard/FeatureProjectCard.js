import React from 'react';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';

const FeatureProjectCard = ({project}) => {

    const {name,title,slug,image} = project;

    let img = image[0];


    return (   
        <div className="col-md-4" style={{marginBottom: '30px'}}>
            <div className="card-container">
               <Link to={`/projects/${slug}`}>
                   <img className="feature-project-img" src={img.url} alt="project image"/>
                </Link>
                <div className="d-flex" style={{marginBottom: '5px'}}>
                    <Link to={`/projects/${slug}`} style={{textDecoration: 'none'}}>
                        <p className="feature-project-name">{name}</p>
                    </Link>
                    <div style={{width: '50px',marginLeft: 'auto',marginTop: '20px'}}>
                        <Link className="viewMore" to={`/projects/${slug}`} title="View More">
                            <CgDetailsMore/>
                        </Link>
                    </div>
                </div>
                
                <p className="feature-project-title">{title}</p>
               
            </div>
        </div>
    );
};

export default FeatureProjectCard;