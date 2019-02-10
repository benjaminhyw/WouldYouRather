import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Home</h3>
        <Login />
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Home);
