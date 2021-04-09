import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Countdown from "../Countdown/Countdown";
import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "../../ImgCarousel/Carousel";
// import Menu from "../../../components/Menu/Menu";
import Logo from "../../logoCarousel/Logo";
import "./Home.css";
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
    img12: img22,
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <a href="product.html">
                  <img
                    className="medium"
                    src={this.state.img}
                    alt="image"
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
                </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
              <a href="product.html">
          <img
            className="medium"
            src={this.state.img3}
            alt="image"
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
        </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <a href="product.html">
                  <img
                    className="medium"
                    src={this.state.img4}
                    alt="image"
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
                </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <a href="product.html">
                  <img
                    className="medium"
                    src={this.state.img5}
                    alt="image"
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
                </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <a href="product.html">
                  <img
                    className="medium"
                    src={this.state.img6}
                    alt="image"
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
                </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
              <a href="product.html">
          <img
            className="medium"
            src={this.state.img7}
            alt="image"
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
        </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <a href="product.html">
                  <img
                    className="medium"
                    src={this.state.img8}
                    alt="image"
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
                </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <a href="product.html">
                  <img
                    className="medium"
                    src={this.state.img9}
                    alt="image"
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
                </a>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
          
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
