import React from "react";
import Rating from "../../../components/Rating/Rating";
import data from "../Home/data";

export default function Product(props) {
  const { product } = props;
  return (

        <div key={product._id} className="card">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <div className="card-body">
            <a href={`/product/${product._id}`}>
              <img className="medium" src={product.image} alt={product.name} />
            </a>
            <h5 className="card-title">{product.gender}</h5>
            <p className="card-text">{product.description}</p>
            <a href={`/product/${product._id}`} className="btn btn-primary">
              Shop Now
            </a>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
            <div className="price">${product.price}</div>
          </div>
        </div>

  );
}
