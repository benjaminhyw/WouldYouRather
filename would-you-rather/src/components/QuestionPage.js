import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import LoginForm from "./Login";
import { loginUser } from "../actions/shared";

class QuestionPage extends Component {
  render() {
    return (
      <div>
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submit} />
        ) : (
          <Question id={this.props.id} questionDisplay={QuestionDisplay} />
        )}
      </div>
    );
  }

  submit = event => {
    this.props.dispatch(loginUser(event.userId));
  };
}
function QuestionDisplay(question) {
  return (
    <div>
      <div>Would you rather...</div>
      {QuestionPoll(question)}
    </div>
  );
}

function QuestionPoll(question) {
  return (
    <form>
      <input type="radio" value={question.optionOne.text} />
      {question.optionOne.text}
      <br />
      <input type="radio" value={question.optionTwo.text} />
      {question.optionTwo.text} <br />
      <button className="btn">Submit</button>
    </form>
  );
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;

  return {
    id,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionPage);
