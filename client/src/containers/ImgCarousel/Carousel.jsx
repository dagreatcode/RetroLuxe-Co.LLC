import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./Carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../img/photo/home-1.jpg";
import image2 from "../../img/photo/home-2.jpg";
import image4 from "../../img/photo/home-3-pastel.jpg";
import image5 from "../../img/photo/home-5.jpg";

export default function Carousel() {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
        <img src={image5} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
