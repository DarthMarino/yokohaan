import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <MDBNavbar className="color-nav fixed-top" light>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <h1 className="title"> YokoHaan</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navigation;
