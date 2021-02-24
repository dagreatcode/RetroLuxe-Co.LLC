import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/pages/Home/Home";
import About from "./containers/pages/About/About";
import Blog from "./containers/pages/Blog/Blog";
import Post from "./containers/pages/Blog/Post";
import Category from "./containers/pages/Category/Category";
import Contact from "./containers/pages/Contact/Contact";
import Customer from "./containers/pages/Customer/Customer";
import FQA from "./containers/pages/FAQ/FAQ";
import Wishlist from "./containers/pages/Wishlist/Wishlist";
import Privacy from "./containers/pages/Privacy/Privacy";
import Detail from "./containers/pages/Detail/Detail";
import Cart from "./containers/pages/Cart/Cart";
import Checkout from "./containers/pages/Checkout/Checkout";
import Intro from "./containers/pages/Intro/Intro";





function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/RetroLuxe-Co.LLC" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/fqa" component={FQA} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
