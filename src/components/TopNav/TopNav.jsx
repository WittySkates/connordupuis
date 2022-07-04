/** @module TopNav */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  NavLink from "react-bootstrap/NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/topnav.scss";

const TopNav = () => {

  return (
    <>
      <Navbar expand="sm" variant="dark" className="navBar" sticky="top">
        <Navbar.Brand className="navBrand" >
        &lt; CD /&gt;
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{paddingLeft: '10px'}}>
          <Nav className="me-auto"  >
            <NavLink className="navLink">
              Home
            </NavLink>
            <NavLink className="navLink" >
              Experience
            </NavLink>
            <NavLink className="navLink" >
              About
            </NavLink>
            <NavLink className="navLink" >
              Contact
            </NavLink>

            {/* <NavLink className="navLink" onClick={() => navigate("/ammo")}>
              Ammo
            </NavLink> */}
          </Nav>
          <Nav >
            <NavLink className="me-2 navLink" >
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
