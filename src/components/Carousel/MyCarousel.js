import React from "react";
import "./MyCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import Slide2 from "../../assets/img/carousel/slide2.webp";
import Slide3 from "../../assets/img/carousel/slide3.webp";
import Slide4 from "../../assets/img/carousel/slide4.webp";
import Scrolldown from "../Scrolldown/Scrolldown";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      <Scrolldown />
    </div>
  );
};

export default MyCarousel;
