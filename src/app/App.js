import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about/">About</Link>
            </li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
