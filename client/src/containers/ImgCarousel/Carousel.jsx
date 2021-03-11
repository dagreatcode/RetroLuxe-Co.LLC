import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./Carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../img/photo/home-1.jpg";
import image2 from "../../img/photo/home-2.jpg";
import image4 from "../../img/photo/home-3-pastel.jpg";
import image5 from "../../img/photo/home-5.jpg";
import image6 from "../../img/photo/home-4.jpg";
import image7 from "../../img/photo/deal-plain.jpg";
import image8 from "../../img/photo/serrah-galos-494279-unsplash-parallax.jpg";
import image9 from "../../img/photo/blog.jpg";


export default function Carousel() {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000" animationDuration="400">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
        <img src={image5} className="sliderimg" alt="" />
        <img src={image6} className="sliderimg" alt="" />
        <img src={image7} className="sliderimg" alt="" />
        <img src={image8} className="sliderimg" alt="" />
        <img src={image9} className="sliderimg" alt="" data-slide="next"/>
      </AliceCarousel>
    </div>
  );
}
