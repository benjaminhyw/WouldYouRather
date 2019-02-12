import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import LoginForm from "./LoginForm";
import {
  loginUser,
  submitNewQuestion,
  updateUserViaResponse
} from "../actions/shared";
import NewQuestionForm from "../components/NewQuestionForm";

class NewQuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false
    };
  }

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
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

  submitLogin = user => {
    this.props.dispatch(loginUser(user.userId));
  };

  submitNewQuestion = event => {
    this.props.dispatch(submitNewQuestion(event));
    this.props.dispatch(
      updateUserViaResponse(event, window.location.pathname.split("/").pop())
    );
    this.setState({ redirectHome: true });
  };
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestionPage);
