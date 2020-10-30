import React from 'react';
import FeatureProjects from '../../Components/FeatureProjects/FeatureProjects';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';

const Home = ({featured}) => {
    return (
        <div>
            <Hero></Hero>
            <FeatureProjects featured={featured}></FeatureProjects>
            <Footer></Footer>
        </div>
    );
};

export default Home;