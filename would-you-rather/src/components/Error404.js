import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Eror404 extends Component {
  render() {
    return (
      <div>
        <p>
          404: This poll does not exist. Please <Link to={`/`}>click here</Link>{" "}
          to go home.
        </p>
      </div>
    );
  }
}
