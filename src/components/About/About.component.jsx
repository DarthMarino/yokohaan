import React from "react";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="p-5 text-center about-bg">
        <img
          src={"/assets/profile.jpg"}
          width="150vw"
          height="150vw"
          alt="My self drawing"
          className="mb-3 profile"
        />

        <MDBCard>
          <MDBCardBody>
            <h3>
              I'm a rising artist. I draw things for fun and also for work. Also
              an avid gamer and series watcher. I like to give my art a Fantasy
              Feeling, so It may take you on a ride to other worlds. Enjoy my
              content
            </h3>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default About;
