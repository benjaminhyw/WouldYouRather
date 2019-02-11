import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { loginUser } from "../actions/shared";
import NewQuestionForm from "../components/NewQuestionForm";

class NewQuestionPage extends Component {
  render() {
    return (
      <div className="center">
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submit} />
        ) : (
          <NewQuestionForm />
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

export default connect(mapStateToProps)(NewQuestionPage);
