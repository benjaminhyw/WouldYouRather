import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="container">
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

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
