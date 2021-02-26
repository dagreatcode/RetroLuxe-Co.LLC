import React, { Component } from "react";
import Countdown from "../Countdown/Countdown";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "../../ImgCarousel/Carousel";
import img from "../../../img/product/category-men.jpg";
import img2 from "../../../img/product/category-women.jpg";


class Home extends Component {
  render() {
    return (
      <Router>
        <Carousel />
        <div className="bg-gray-100 position-relative">
          <div className="container py-6">
            <div className="row">
              <div className="col-sm-6 md-5 md-sm-0">
                
              <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                        <img className="card-img img-scale" alt="Card image" src={img}/>
              </div>


              </div>
              <div className="col-sm-6 md-5 md-sm-0">
              <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                        <img className="card-img img-scale" alt="Card image" src={img2}/>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Welcome To Retro Luxe & Co. LLC.</h1>
        </div>
        <Countdown />
      </Router>
    );
  }
}

export default Home;
