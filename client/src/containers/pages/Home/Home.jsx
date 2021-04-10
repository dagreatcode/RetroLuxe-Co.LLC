import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Countdown from "../Countdown/Countdown";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import Product from "../Product/Product"
import Footer from "../../../components/Footer/Footer";
import data from "./data";
import "./Home.css";

export default function Home() {
  return (
    <>
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
    <Footer />
  </>
  )
}