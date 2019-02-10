import React, { Component } from "react";
import Login from "./Login";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Home</h3>
        <Login />
      </div>
    );
  }
}
