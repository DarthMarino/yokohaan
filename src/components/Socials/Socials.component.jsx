import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "./Socials.css";

const Socials = () => {
  return (
    <>
      <header>
        <div className="p-5 text-center socials">
          <a
            href="https://www.instagram.com/yokohaan_art/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MDBIcon size="4x">
              <i className="fab fa-instagram" />
            </MDBIcon>
          </a>{" "}
          <a
            href="https://ko-fi.com/yokohaan"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MDBIcon size="4x">
              <i className="fas fa-coffee"></i>
            </MDBIcon>
          </a>{" "}
          <a
            href="https://twitter.com/YokoHaanTsu"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MDBIcon size="4x">
              <i className="fab fa-twitter"></i>
            </MDBIcon>
          </a>{" "}
        </div>
      </header>
    </>
  );
};

export default Socials;
