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
import data from "./data";

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
          {data.products.map((product) => (
            <div key={product._id} className="col-sm-3">
              <div className="card">
                <a href={`/product/${product.id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="card-body">
                  <a href={`/product/${product.id}`}>
                    <img
                      className="medium"
                      src={this.state.img}
                      alt={product.name}
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
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href={`/product/${product.id}`} className="btn btn-primary">
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
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
