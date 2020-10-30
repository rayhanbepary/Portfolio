import React from 'react';
import FeatureProjectCard from '../../Components/FeatureProjectCard/FeatureProjectCard';
import Footer from '../../Components/Footer/Footer';

const Projects = ({data}) => {
    return (
        <div>
            <div className="container projects-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{fontFamily: 'Rubik', marginBottom: '50px'}}>My Recent Projects</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map(project => <FeatureProjectCard key={project._id} project={project}></FeatureProjectCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;