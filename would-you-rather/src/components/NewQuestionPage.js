import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { loginUser, submitNewQuestion } from "../actions/shared";
import NewQuestionForm from "../components/NewQuestionForm";

class NewQuestionPage extends Component {
  render() {
    return (
      <div className="center">
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submitLogin} />
        ) : (
          <NewQuestionForm onSubmit={this.submitNewQuestion} />
        )}
      </div>
    );
  }

  submitLogin = event => {
    this.props.dispatch(loginUser(event.userId));
  };

  submitNewQuestion = event => {
    this.props.dispatch(submitNewQuestion(event));
  };
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestionPage);
