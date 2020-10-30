import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Soon from '../../img/Under-Construction.jpg';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <img src={Soon} alt="" style={{width: '100%',height: '100vh'}}/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;