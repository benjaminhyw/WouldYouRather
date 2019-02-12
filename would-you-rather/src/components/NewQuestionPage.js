import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import LoginForm from "./LoginForm";
import { loginUser, submitNewQuestion } from "../actions/shared";
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

  submitLogin = event => {
    this.props.dispatch(loginUser(event.userId));
  };

  submitNewQuestion = event => {
    this.props.dispatch(submitNewQuestion(event));
    this.setState({ redirectHome: true });
  };
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestionPage);
