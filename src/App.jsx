import React from "react";
import TopNav from './components/TopNav/TopNav';
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import { experienceData, projectData } from "./components/Card/cardData";
import './App.scss';

const  App = () => {
  return (
    <>
    <div className="App">
        <TopNav/>

        <div className="section" id="home">
          <div id="homeAnchor" style={{position: "relative", top: "-300px", left: 0}}></div>
          <div className="intro">
            <h1>
              Hey there! My name is Connor Dupuis and I am a passionate{" "}
              <span style={{color:"#355cc7"}}>Developer</span>
              .
            </h1>
            <div className="introTldr">
            I strive to create solutions that have a meaningful impact while also maintaining efficiency and scalability.
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#1b1b1b"> 
            <path d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"></path>
          </svg>
        </div>

        <div className="section" id="experience">
        <div id="experienceAnchor" style={{position: "relative", top: "-60px", left: 0}}></div>
          <div className="sectionTitle">
            <h1>
              Work
              </h1>
          </div>
          <div className="experienceGrid">
            {Object.keys(experienceData).map((map, index)=>(
              <Card key={index} data={experienceData[map]} color={"#27272a"}/>
            ))}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" fill="#242424">
            <path d="M 0 240 L 0 30 C 230 80 290 40 460 90 C 600 130 640 160 960 130 C 1160 120 1160 190 1440 210 L 1440 240 Z"></path>
          </svg>
        </div>

        <div className="section" id="projects">
        <div id="projectsAnchor" style={{position: "relative", top: "-60px", left: 0}}></div>
        <div className="sectionTitle">
            <h1>
              Projects
              </h1>
          </div>
          <div className="projectGrid">
            {Object.keys(projectData).map((map, index)=>(
              <Card key={index} data={projectData[map]} color={"#27272a"}/>
            ))}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" fill="#1b1b1b">
            <path d="M 0 240 L 0 200 C 70 160 230 230 480 150 C 710 80 870 160 1010 110 C 1180 50 1310 20 1440 30 L 1440 240 Z"></path>
          </svg>
        </div>

        <div className="section" id="contact">
        <div id="contactAnchor" style={{position: "relative", top: "-50px", left: 0}}></div>

          <div className="ContactWrapper">
          <div className="sectionTitle">
            <h1>
              Contact
              </h1>
          </div>
            <Contact/>
          </div>
        </div>

        <div className="footer">
              Connor Dupuis
        </div>
      </div>

    </>
  );
}

export default App;
