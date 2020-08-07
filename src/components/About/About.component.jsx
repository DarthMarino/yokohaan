import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import profile from "./../../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <br />
          <img src={profile} alt="My homemade art" className="profile" />
          <br />
          <h1>About Me</h1>
          <p>
            I'm a rising artist. I draw things for fun and also for work. Also
            an avid gamer and series watcher.
          </p>
          <p>
            I like to give my art a Fantasy Feeling, so It may take you on a
            ride to other worlds.
          </p>
          <p>Enjoy my content</p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default About;
