import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <h3>Welcome!</h3>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
