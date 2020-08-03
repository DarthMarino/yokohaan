import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Navbar fixed="top" className="color-nav">
        <Navbar.Brand href="#home">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/pixels-2.svg"
            alt="Pixels, my super cute cat"
            height="50px"
            width="50px"
          />
          YokoHaan
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Portfolio">Features</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
