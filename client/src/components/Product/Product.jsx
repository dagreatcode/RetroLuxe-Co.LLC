import React from "react";
import Rating from "../Rating/Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="col-sm-3">
      <div className="card">
        <a href={`/product/${product.id}`}>
          <h2>{product.name}</h2>
        </a>
        <div className="card-body">
          <a href={`/product/${product.id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </a>
          <h5 className="card-title">{product.gender}</h5>
          <p className="card-text">{product.description}</p>
          <a href={`/product/${product.id}`} className="btn btn-primary">
            Shop Now
          </a>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
}
