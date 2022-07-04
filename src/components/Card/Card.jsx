/** @module Card */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/card.scss";

const Card = (props) => {
    const {data:{title, tldr, description, languages, source, live}, color} = props;
    
  return (
    <>
    <div className="cardBox" style={{backgroundColor: color}}>

        <div className="cardText">
            <div className="cardTitle">
                {title}
            </div>
            <div className="cardTldr">
                {tldr}
            </div>
            <div className="cardDescription">
                {description}
            </div>
        </div>
 
        <div className="languagesWrapper">      
            <div className="cardLanguages">
                {languages.map((map, index)=>(
                    <div key={index}>{map}</div>
                ))}
            </div>
        </div>

        <div className="bottomBar">
            {source && 
            (<div onClick={() => {window.open(source,'mywindow')}}>
                &lt;/&gt; Source
            </div>)}
            {live && 
            (<div onClick={() => {console.log(live);window.open(live,'mywindow')}}>
                    Live
            </div>)}
        </div>
    </div>
    </>
  );
};

export default Card;
