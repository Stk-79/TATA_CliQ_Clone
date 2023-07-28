import React from "react";
import { Carousel } from "react-bootstrap";
import img3 from "../../assets/carousel-img-3.png";
import img4 from "../../assets/carousel-img-4.png";
import img5 from "../../assets/carousel-img-5.png";

function SCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Image3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Image4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Image5" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SCarousel;
