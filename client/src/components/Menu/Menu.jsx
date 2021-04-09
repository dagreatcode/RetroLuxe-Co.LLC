import React from "react";

const Menu = () => {
  return (
    <div>
      <li className="nav-item dropdown position-static">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Pages
        </a>
        <div
          className="dropdown-menu megamenu px-4 px-lg-5 py-lg-5"
          data-translate-x="-50%"
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <img
                className="img-fluid mb-3 d-none d-lg-block"
                src="img/blog/christopher-campbell-28571-unsplash.jpg"
                alt=""
              />

              <h6>Homepage</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="index.html">
                    Home 1 - Fashion{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="index-2.html">
                    Home 2 - Fashion{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="index-3.html">
                    Home 3 - Design{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="index-4.html">
                    Home 4 - Design{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
              </ul>

              <h6>Category</h6>
              <ul className="megamenu-list list-unstyled mb-lg-0">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="category-full.html">
                    Full width{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="category-full-sidebar.html"
                  >
                    Full width with category menu{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="category-big-products.html"
                  >
                    Full width with big products{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="category-boxed.html">
                    Fixed width{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="category-sidebar.html"
                  >
                    Fixed width & sidebar{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="category-masonry.html"
                  >
                    Fixed width & masonry layout
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="category-categories.html"
                  >
                    Subcategories{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <img
                className="img-fluid mb-3 d-none d-lg-block"
                src="client/src/img/blog/ian-dooley-347962-unsplash.jpg"
                alt=""
              />

              <h6>Order process</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="cart.html">
                    Shopping cart{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="checkout1.html">
                    Checkout - Five steps{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="checkout.html">
                    Checkout - Single-page{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="checkout-confirmed.html"
                  >
                    Checkout - confirmed{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="wishlist.html">
                    Wishlist{" "}
                  </a>
                </li>
              </ul>

              <h6>Product</h6>
              <ul className="megamenu-list list-unstyled mb-lg-0">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="detail-1.html">
                    Product with sticky info{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="detail-2.html">
                    Product with background{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="detail-3.html">
                    Product standard{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <img
                className="img-fluid mb-3 d-none d-lg-block"
                src="img/blog/ian-dooley-347942-unsplash.jpg"
                alt=""
              />

              <h6>Blog</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="blog.html">
                    Blog{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="blog-masonry.html">
                    Blog - Masonry{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="post.html">
                    Post{" "}
                  </a>
                </li>
              </ul>

              <h6>Pages</h6>
              <ul className="megamenu-list list-unstyled">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="about.html">
                    About - Company{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="about-2.html">
                    About v.2 - Person{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="faq.html">
                    F.A.Q.{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="contact.html">
                    Contact{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="privacy.html">
                    Privacy policy{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <img
                className="img-fluid mb-3 d-none d-lg-block"
                src="img/blog/photo-1534126511673-b6899657816a.jpg"
                alt=""
              />

              <h6>Customer</h6>
              <ul className="megamenu-list list-unstyled mb-lg-0">
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="customer-login.html">
                    Login/sign up
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="customer-orders.html">
                    Orders{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a className="megamenu-list-link" href="customer-order.html">
                    Order detail{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="customer-order-tracking.html"
                  >
                    Order tracking{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="customer-addresses.html"
                  >
                    Addresses{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="customer-account.html"
                  >
                    Profile{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
                <li className="megamenu-list-item">
                  <a
                    className="megamenu-list-link"
                    href="customer-wishlist.html"
                  >
                    Wishlist{" "}
                    <span className="badge badge-primary-light ml-1">New</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Menu;
