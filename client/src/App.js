
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";


function App() {

  
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
          </Switch>
        </div>
      </Router>
      <h1>Welcome To Retro Luxe.</h1>
      <h1>Where Your Dreams Come True!</h1>
    </div>
  );
}

export default App;
