import React from "react";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import profile from "./../../assets/profile.jpg";
import Socials from "../Socials/Socials.component";
import "./About.css";

const About = () => {
  return (
    <>
      <header>
        <div className="p-5 text-center about-bg">
          <img src={profile} alt="My self drawing" className="mb-3 profile" />

          <MDBCard className="card">
            <MDBCardBody>
              <h4 className="mb-3 card-body">
                I'm a rising artist. I draw things for fun and also for work.
                Also an avid gamer and series watcher. I like to give my art a
                Fantasy Feeling, so It may take you on a ride to other worlds.
                Enjoy my content
              </h4>
            </MDBCardBody>
          </MDBCard>
          <Socials />
        </div>
      </header>
    </>
  );
};

export default About;
