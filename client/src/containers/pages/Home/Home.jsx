import React, { Component } from "react";
import Countdown from "../Countdown/Countdown";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "../../ImgCarousel/Carousel";
import Footer from "../../../components/Footer/Footer";
import img from "../../../img/product/category-men.jpg";
import img2 from "../../../img/product/category-women.jpg";
import img10 from "../../../img/product/0027211800_1_2_1.jpg";
import img101 from "../../../img/product/0027211800_2_1_1.jpg";
import img12 from "../../../img/product/0029352433_1_1_1.jpg";
import img102 from "../../../img/product/0029352433_2_1_1.jpg";
import img13 from "../../../img/product/0144074800_1_1_1.jpg";
import img103 from "../../../img/product/0144074800_2_1_1.jpg";
import img14 from "../../../img/product/0364326148_1_1_1.jpg";
import img104 from "../../../img/product/0364326148_2_1_1.jpg";
import img15 from "../../../img/product/0364326800_1_1_1.jpg";
import img105 from "../../../img/product/0364326800_2_1_1.jpg";
import img16 from "../../../img/product/0365115800_1_2_1.jpg";
import img106 from "../../../img/product/0365115800_2_1_1.jpg";
import img17 from "../../../img/product/0907168607_1_1_1.jpg";
import img107 from "../../../img/product/0907168607_2_1_1.jpg";
import img18 from "../../../img/product/0915494643_1_1_1.jpg";
import img108 from "../../../img/product/0915494643_2_1_1.jpg";
import img19 from "../../../img/product/0931168712_1_1_1.jpg";
import img109 from "../../../img/product/0931168712_2_1_1.jpg";
import img20 from "../../../img/product/0949168513_1_1_1.jpg";
import img200 from "../../../img/product/0949168513_2_1_1.jpg";
import img21 from "../../../img/product/0950354513_1_1_1.jpg";
import img201 from "../../../img/product/0950354513_2_1_1.jpg";
import img22 from "../../../img/product/0987188250_1_1_1.jpg";
import img202 from "../../../img/product/0987188250_2_1_1.jpg";

class Home extends Component {
  state = {
    img: img10,
    img2: img12,
    img3: img13,
    img4: img14,
    img5: img15,
    img6: img16,
    img7: img17,
    img8: img18,
    img9: img19,
    img10: img20,
    img11: img21,
    img12: img22
  };
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
        <h1>New Arrivals</h1>
        <p className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          natus nobis vel, quidem pariatur fuga excepturi ipsum quisquam nulla
          dolorum vitae deserunt nostrum incidunt cumque, quo voluptates
          recusandae odit laudantium?
        </p>
        <div className="position-relative">
          <div className="container py-6">
            <div className="row">
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                  <img
                    src={this.state.img}
                    onMouseEnter={() => {
                      this.setState({
                        img: img101,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img: img10,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img2}
                    onMouseEnter={() => {
                      this.setState({
                        img2: img102,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img2: img12,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img3}
                    onMouseEnter={() => {
                      this.setState({
                        img3: img103,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img3: img13,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img4}
                    onMouseEnter={() => {
                      this.setState({
                        img4: img104,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img4: img14,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img5}
                    onMouseEnter={() => {
                      this.setState({
                        img5: img105,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img5: img15,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img6}
                    onMouseEnter={() => {
                      this.setState({
                        img6: img106,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img6: img16,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img7}
                    onMouseEnter={() => {
                      this.setState({
                        img7: img107,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img7: img17,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img8}
                    onMouseEnter={() => {
                      this.setState({
                        img8: img108,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img8: img18,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img9}
                    onMouseEnter={() => {
                      this.setState({
                        img9: img109,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img9: img19,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img10}
                    onMouseEnter={() => {
                      this.setState({
                        img10: img201,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img10: img20,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img11}
                    onMouseEnter={() => {
                      this.setState({
                        img11: img201,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img11: img21,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-2 md-5 md-sm-0">
                <div class="card card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                <img
                    src={this.state.img12}
                    onMouseEnter={() => {
                      this.setState({
                        img12: img202,
                      });
                    }}
                    onMouseOut={() => {
                      this.setState({
                        img12: img22,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <Countdown />
        <div className="container">
          <h4>Our History</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            natus nobis vel, quidem pariatur fuga excepturi ipsum quisquam nulla
            dolorum vitae deserunt nostrum incidunt cumque, quo voluptates
            recusandae odit laudantium? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo natus nobis vel, quidem pariatur fuga
            excepturi ipsum quisquam nulla dolorum vitae deserunt nostrum
            incidunt cumque, quo voluptates recusandae odit laudantium? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus
            nobis vel, quidem pariatur fuga excepturi ipsum quisquam nulla
            dolorum vitae deserunt nostrum incidunt cumque, quo voluptates
            recusandae odit laudantium? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo natus nobis vel, quidem pariatur fuga
            excepturi ipsum quisquam nulla dolorum vitae deserunt nostrum
            incidunt cumque, quo voluptates recusandae odit laudantium? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus
            nobis vel, quidem pariatur fuga excepturi ipsum quisquam nulla
            dolorum vitae deserunt nostrum incidunt cumque, quo voluptates
            recusandae odit laudantium? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo natus nobis vel, quidem pariatur fuga
            excepturi ipsum quisquam nulla dolorum vitae deserunt nostrum
            incidunt cumque, quo voluptates recusandae odit laudantium?{" "}
          </p>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default Home;
