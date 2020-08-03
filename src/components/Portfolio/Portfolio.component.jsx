import React from "react";
import "./Portfolio.css";
import wolf from "./../../assets/wolf.jpg";
import skull from "./../../assets/skull.jpg";
import triforce from "./../../assets/triforce.jpg";
import eagle from "./../../assets/eagle.jpg";
const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <div class="row">
        <div class="column">
          <img src={wolf} alt="" />
          <img src={skull} alt="" />
          <img src={triforce} alt="" />
          <img src={eagle} alt="" />
        </div>
        <div class="column">
          <img src={skull} alt="" />
          <img src={wolf} alt="" />
          <img src={eagle} alt="" />
          <img src={triforce} alt="" />
        </div>
        <div class="column">
          <img src={triforce} alt="" />
          <img src={skull} alt="" />
          <img src={eagle} alt="" />
          <img src={wolf} alt="" />
        </div>
        <div class="column">
          <img src={skull} alt="" />
          <img src={triforce} alt="" />
          <img src={wolf} alt="" />
          <img src={eagle} alt="" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
