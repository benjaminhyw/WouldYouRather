import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/newQuestion" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={Leaderboard} />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
