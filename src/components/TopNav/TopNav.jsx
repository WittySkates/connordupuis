/** @module TopNav */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  NavLink from "react-bootstrap/NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/topnav.scss";

const TopNav = () => {

const scrollInto = (id) =>{
  document.getElementById(id).scrollIntoView({
    block: "start",
    inline:"nearest",
    behavior: "smooth",
  });
}

  return (
    <>
      <Navbar expand="sm" variant="dark" className="navBar" sticky="top">
        <Navbar.Brand className="navBrand" >
        &lt; CD /&gt;
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{paddingLeft: '10px'}}>
          <Nav className="me-auto"  >
            <NavLink className="navLink"onClick={()=>{scrollInto("homeAnchor")}}>
              Home
            </NavLink>
            <NavLink className="navLink" onClick={()=>{scrollInto("experienceAnchor")}}>
              Experience
            </NavLink>
            <NavLink className="navLink" onClick={()=>{scrollInto("projectsAnchor")}}>
              Projects
            </NavLink>
            <NavLink className="navLink" onClick={()=>{scrollInto("contactAnchor")}}>
              Contact
            </NavLink>
          </Nav>
          <Nav >
            <NavLink className="me-2 navLink" href="./Resume.pdf" target="blank">
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
