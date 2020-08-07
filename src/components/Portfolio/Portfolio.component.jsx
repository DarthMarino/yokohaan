import React from "react";
import ImageGallery from "react-image-gallery";
import "./Portfolio.css";
import image1 from "./../../assets/image1.jpeg";
import image2 from "./../../assets/image2.jpeg";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.jpg";
import image5 from "./../../assets/image5.png";
import image6 from "./../../assets/image6.png";
import image7 from "./../../assets/image7.png";

const images = [
  {
    original: image1,
    thumbnail: image1,
    thumbnailClass: "thumbnail",
  },
  {
    original: image2,
    thumbnail: image2,
    thumbnailClass: "thumbnail",
  },
  {
    original: image3,
    thumbnail: image3,
    thumbnailClass: "thumbnail",
  },
  {
    original: image4,
    thumbnail: image4,
    thumbnailClass: "thumbnail",
  },
  {
    original: image5,
    thumbnail: image5,
    thumbnailClass: "thumbnail",
  },
  {
    original: image6,
    thumbnail: image6,
    thumbnailClass: "thumbnail",
  },
  {
    original: image7,
    thumbnail: image7,
    thumbnailClass: "thumbnail",
  },
];

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h1 id="Portfolio">Portfolio</h1>
        <ImageGallery
          slideInterval={6000}
          lazyLoad={true}
          autoPlay
          items={images}
        />
        ;
      </>
    );
  }
}

export default Portfolio;
