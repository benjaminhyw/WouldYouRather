import React, { Component } from "react";

export default class NewQuestion extends Component {
  render() {
    return (
      <div className="center">
        <h3 className="center">Create New Question</h3>
        <div>Would you rather ...</div>
        <form>
          <input />
          <div>OR</div>
          <input />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
