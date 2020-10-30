import React from 'react';
import FeatureProjectCard from '../FeatureProjectCard/FeatureProjectCard';

import CreativeAgency from '../../img/projects/creative-agency.jpg';
import BeachResort from '../../img/projects/beach-resort.jpg';
import DoctorsPortal from '../../img/projects/doctors-portal.jpg';

const FeatureProjects = ({featured}) => {

    // const projects = [
    //     {
    //         _id: 1,
    //         name: 'Creative Agency',
    //         title: 'Service Selling Application',
    //         image: CreativeAgency
    //     },
    //     {
    //         _id: 2,
    //         name: 'Beach Resort',
    //         title: 'Hotel Booking Application',
    //         image: BeachResort
    //     },
    //     {
    //         _id: 3,
    //         name: 'Doctors Portal',
    //         title: 'Doctors Appointment Booking Application',
    //         image: DoctorsPortal

    //     }
    // ]

    return (
        <div className="feature-project-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{textAlign: 'center', marginBottom: '50px',fontFamily: 'Rubik'}}>Some of my projects</h4>
                    </div>
                </div>
                <div className="row">
                    {
                        featured.map(project => <FeatureProjectCard key={project._id} project={project}></FeatureProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureProjects;