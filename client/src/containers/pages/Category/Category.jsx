import React, { Component } from "react";
import hats from "../../../img/product/product-square-serrah-galos-494312-unsplash.jpg";
import pants from "../../../img/product/5161335400_1_1_1.jpg";
import jacket from "../../../img/product/category-jackets-3-colour-bg-2.jpg";
import glasses from "../../../img/product/product-square-kyle-loftus-596319-unsplash.jpg";
import dress from "../../../img/product/category-dresses-2-colour-bg-2.jpg";
import shirt from "../../../img/product/0950354513_2_1_1.jpg";

class Category extends Component {
  render() {
    return (
      <div>
        <h1>Category</h1>
        <img className="blog" width="300" height="300" src={hats} />
        <img className="blog" width="300" height="300" src={pants} />
        <img className="blog" width="300" height="300" src={jacket} />
        <img className="blog" width="300" height="300" src={glasses} />
        <img className="blog" width="300" height="300" src={dress} />
        <img className="blog" width="300" height="300" src={shirt} />
      </div>
    );
  }
}

export default Category;
