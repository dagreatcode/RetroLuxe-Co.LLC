import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/pages/Home/Home";


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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
