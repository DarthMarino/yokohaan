import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import "./Portfolio.css";
import image0 from "./../../assets/image7.png";
import image1 from "./../../assets/image1.jpeg";
import image2 from "./../../assets/image2.jpeg";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.jpg";
import image5 from "./../../assets/image5.png";
import image6 from "./../../assets/image6.png";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h1 className="header" id="Portfolio">
          Some of my art
        </h1>
        <div className="carousel portfolio">
          <MDBCarousel showIndicators interval={500}>
            <MDBCarouselInner>
              <MDBCarouselItem itemId={0}>
                <MDBCarouselElement src={image0} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={1}>
                <MDBCarouselElement src={image1} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <MDBCarouselElement src={image2} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <MDBCarouselElement src={image3} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={4}>
                <MDBCarouselElement src={image4} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={5}>
                <MDBCarouselElement src={image5} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={6}>
                <MDBCarouselElement src={image6} alt="..." />
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      </>
    );
  }
}

export default Portfolio;
