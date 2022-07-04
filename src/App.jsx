import React from "react";
import TopNav from './components/TopNav/TopNav';
import Card from "./components/Card/Card";
import { experienceData } from "./components/Card/cardData";
import './App.scss';

const  App = () => {
  return (
    <>
    <div className="App">
        <TopNav/>
        <div className="section" id="experience">
          <div className="experienceGrid">
            {Object.keys(experienceData).map((map, index)=>(
              <Card key={index} data={experienceData[map]}/>
            ))}
          </div>
          
        </div>
      </div>

    </>
  );
}

export default App;
