import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
            <div className="top-bar text-sm bg-transparent">
          <div className="container-fluid px-lg-5 py-3">
            <div className="row align-items-center">
              <div className="col-md-4 d-none d-md-block">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-2">
                    <a className="text-reset text-hover-primary" href="#">
                      <i className="fab fa-facebook-f"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-4">
                    <a className="text-reset text-hover-primary" href="#">
                      <i className="fab fa-twitter"> </i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 text-left text-md-center">
                <p className="mb-0">Custom Outfits</p>
              </div>
              <div className="col-sm-6 col-md-4 d-none d-sm-flex justify-content-end">
                <div className="dropdown border-right px-3">
                  <a
                    className="dropdown-toggle topbar-link"
                    id="langsDropdown"
                    href="#"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    English
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="langsDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      German
                    </a>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </div>
                </div>
                <div className="dropdown pl-3 ml-0">
                  <a
                    className="dropdown-toggle topbar-link"
                    id="currencyDropdown"
                    href="#"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    USD
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="currencyDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      EUR
                    </a>
                    <a className="dropdown-item" href="#">
                      {" "}
                      GBP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">
          <Link to="/">Retro Luxe & Co. </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                <NavLink to="/fqa" className="nav-link">
                  FQA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/login">Profile</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/category">Category:</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/intro"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Extras
                </a>
              </li>
            </ul>
            <NavLink to="/wishlist" className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Wishlist
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/cart">Items:</Link>
                </li>
              </ul>
            </NavLink>
            <NavLink to="/cart" className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cart
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/cart">Items:</Link>
                </li>
              </ul>
            </NavLink>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                name="search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
