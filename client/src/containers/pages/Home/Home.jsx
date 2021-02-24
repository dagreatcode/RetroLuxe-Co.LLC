import React, { Component } from "react"; 
import Countdown from "../Countdown/Countdown";
import { BrowserRouter as Router} from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <Router>
      <Countdown/>
          <div>
            <h1>Welcome To Retro Luxe & Co. LLC.</h1>
          </div>
      </Router>
    );
  }
}

export default Home;