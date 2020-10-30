import React, { useEffect, useState } from 'react';
import './App.css';
import Data from './Data';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';

function App() {

  const [featured,setFeatured] = useState([]);
  useEffect(() =>{
    let featuredProjects = Data.filter(projects => projects.featured === true);
    setFeatured(featuredProjects);
  },[])

  return (
    <>
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/">
            <Home featured={featured}></Home>
          </Route>
          <Route exact path="/projects">
            <Projects data={Data}></Projects>
          </Route>
          <Route exact path="/projects/:slug">
            <ProjectDetails data={Data}></ProjectDetails>
          </Route>
          <Route exact path="/resume">
            <Resume></Resume>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/creativeAgencyLive" render={() => (window.location = "https://creative-agency-6b145.web.app/")}></Route>
          <Route exact path="/creativeAgencyGit" render={() => (window.location = "https://github.com/rayhanbepary/creative-agency-client.git")}></Route>

          <Route exact path="/beachResortLive" render={() => (window.location = "https://beach-resort-a004e.web.app/")}></Route>
          <Route exact path="/beachResortGit" render={() => (window.location = "https://github.com/rayhanbepary/beach-resort.git")}></Route>

          <Route exact path="/doctorsPortalLive" render={() => (window.location = "https://doctors-portal-e9d6f.web.app/")}></Route>
          <Route exact path="/doctorsPortalGit" render={() => (window.location = "https://github.com/rayhanbepary/doctors-portal.git")}></Route>

          <Route exact path="/volunteerNetworkLive" render={() => (window.location = "https://volunteer-network-5055d.web.app/")}></Route>
          <Route exact path="/volunteerNetworkGit" render={() => (window.location = "https://github.com/rayhanbepary/volunteer-network.git")}></Route>

          <Route exact path="/linkedIn" render={() => (window.location = "https://www.linkedin.com/in/rayhan-bepary/")}></Route>
          <Route exact path="/github" render={() => (window.location = "https://github.com/rayhanbepary/")}></Route>
          <Route exact path="/facebook" render={() => (window.location = "https://www.facebook.com/rrayhanbepary")}></Route>
        </Switch>
    </>
  );
}

export default App;
