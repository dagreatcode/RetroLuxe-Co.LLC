import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Logo.css";
import logo from "../../img/brand/brand-1.svg";
import logo2 from "../../img/brand/brand-2.svg";
import logo3 from "../../img/brand/brand-3.svg";
import logo4 from "../../img/brand/brand-4.svg";
import logo5 from "../../img/brand/brand-5.svg";
import logo6 from "../../img/brand/brand-6.svg";


export default function Logo() {
  return (
    <div>
      <AliceCarousel auto autoPlay autoPlayInterval="2000" animationDuration="400">
        <img src={logo}  className="logoimg" alt="" />
        <img src={logo2} className="logoimg" alt="" />
        <img src={logo3} className="logoimg" alt="" />
        <img src={logo4} className="logoimg" alt="" />
        <img src={logo5} className="logoimg" alt="" />
        <img src={logo6} className="logoimg" alt="" />
      </AliceCarousel>
    </div>
  );
}