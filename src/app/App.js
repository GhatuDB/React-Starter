import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from "./Home/Home";
import About from "./About/About";
import Todos from "./Todos/Todos";
import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

// library.add(faEdit);

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
            <li className="nav-item">
              <Link className="nav-link" to="/todos/">Todos</Link>
            </li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/todos/" component={Todos} />
        </div>
      </Router>
    );
  }
}

export default App;
