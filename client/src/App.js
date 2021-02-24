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
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/fqa" component={FQA} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/intro" component={Intro} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
