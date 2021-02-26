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
        <h1>Welcome To Retro Luxe & Co. LLC.</h1>
        <div className="bg-gray-100 position-relative">
          <div className="container py-6">
            <div className="row">
              <div className="col-sm-6 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                  <img
                    className="card-img img-scale"
                    alt="Card image"
                    src={img}
                  />
                </div>
              </div>
              <div className="col-sm-6 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                  <img
                    className="card-img img-scale"
                    alt="Card image"
                    src={img2}
                  />
                </div>
                <svg width="0" height="0" class="hidden">
                  <symbol
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    id="blob-shape-4"
                  >
                    <path
                      d="M404.2 181.3c38.3 26.6 81.8 52.4 95.4 89.5 13.7 37.1-2.4 85.4-29.2 123.8-26.7 38.3-64 66.8-110 92.7-45.9 26-100.5 49.5-138.2 32.9-37.6-16.5-58.3-73.1-80.1-123.1-21.8-50-44.7-93.4-44.2-139 .5-45.6 24.5-93.4 62.1-120.1 37.6-26.7 88.8-32.4 130.9-21.5 42.1 10.8 75.1 38.2 113.3 64.8z"
                      fill="#c4e0f3"
                    ></path>
                  </symbol>
                  <symbol
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    id="blob-shape-3"
                  >
                    <path
                      d="M456.5 103.8c39.6 42.8 60.2 98.6 63.7 152.4 3.6 53.7-10 105.5-39.1 141.3-29.1 35.8-73.6 55.6-117.4 67.1-43.9 11.4-87 14.6-120.7-.8s-58.1-49.4-87.1-86.8c-29-37.5-62.6-78.4-57.4-113.4 5.1-35 49-64 89-106.8 40.1-42.8 76.3-99.3 123.6-112.6C358.5 31 417 60.9 456.5 103.8z"
                      fill="#8ed1fc"
                    ></path>
                  </symbol>
                  <symbol
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    id="blob-shape-2"
                  >
                    <path
                      d="M430.6 143.2c29.1 25.5 36.4 75.8 32.6 118.6-3.7 42.7-18.5 78-34.8 118.2-16.3 40.2-34 85.3-69.8 111.5-35.7 26.2-89.4 33.4-128.3 13.4-38.9-20-63-67.2-85.8-112.4-22.9-45.2-44.5-88.4-46.7-137.3-2.3-48.9 14.8-103.6 51.7-127.7 36.9-24.2 93.7-17.8 147.5-14.3 53.8 3.6 104.6 4.4 133.6 30z"
                      fill="#8ed1fc"
                    ></path>
                  </symbol>
                  <symbol
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    id="blob-shape"
                  >
                    <path
                      d="M419.4 180.5c43 43.1 90.8 81.3 90.2 118.9C509 337 460 374 417 416c-43 42-80 89-124.9 96.9-44.9 7.9-97.7-23.3-141.2-65.3-43.5-42-77.7-94.8-83.8-153.7-6.2-59 15.8-124 59.3-167.2 43.5-43.1 108.5-64.4 160.2-51 51.6 13.4 89.8 61.6 132.8 104.8z"
                      fill="#FFB4BC"
                    ></path>
                  </symbol>
                </svg>
                <svg class="blob">
                  <use xlinkHref="#blob-shape-4"></use>
                </svg>
                <svg class="blob">
                  <use xlinkHref="#blob-shape-3"></use>
                </svg>
                <svg class="blob">
                  <use xlinkHref="#blob-shape-2"></use>
                </svg>
                <svg class="blob">
                  <use xlinkHref="#blob-shape"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <Countdown />
      </Router>
    );
  }
}

export default Home;
