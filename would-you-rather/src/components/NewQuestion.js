import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./Login";
import { loginUser } from "../actions/shared";

class NewQuestion extends Component {
  render() {
    return (
      <div className="center">
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submit} />
        ) : (
          <div>
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
        )}
      </div>
    );
  }

  submit = event => {
    this.props.dispatch(loginUser(event.userId));
  };
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);
