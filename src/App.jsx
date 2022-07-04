import React from "react";
import TopNav from './components/TopNav/TopNav';
import Card from "./components/Card/Card";
import { experienceData, projectData } from "./components/Card/cardData";
import './App.scss';

const  App = () => {
  return (
    <>
    <div className="App">
        <TopNav/>

        <div className="section" id="home">
          <div className="intro">
            <h1>
              Hi
            </h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="divider" viewBox="0 0 1440 120" fill="#1b1b1b">
            <path d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"></path>
          </svg>
        </div>

  

        <div className="section" id="experience">
          <div className="experienceGrid">
            {Object.keys(experienceData).map((map, index)=>(
              <Card key={index} data={experienceData[map]}/>
            ))}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="divider" viewBox="0 0 1440 120" fill="#242424">
            <path d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"></path>
          </svg>
        </div>

 

        <div className="section" id="projects">
          <div className="projectGrid">
            {Object.keys(projectData).map((map, index)=>(
              <Card key={index} data={projectData[map]}/>
            ))}
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
