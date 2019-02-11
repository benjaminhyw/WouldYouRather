import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import LoginForm from "./Login";
import { loginUser } from "../actions/shared";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    QuestionDisplay = QuestionDisplay.bind(this);
  }

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
  let userObj = this.props.users[this.props.authedUser];

  return (
    <div className="resultsWrapper">
      {userObj.answers[question.id]
        ? QuestionResults(question, userObj)
        : QuestionPoll(question)}
    </div>
  );
}

function QuestionPoll(question) {
  return (
    <div>
      <div>Would you rather...</div>
      <form>
        <input type="radio" value={question.optionOne.text} />
        {question.optionOne.text}
        <br />
        <input type="radio" value={question.optionTwo.text} />
        {question.optionTwo.text} <br />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

function QuestionResults(question, userObj) {
  let totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  return (
    <div>
      <h3>Results:</h3>
      {singleQuestionResult(question.optionOne, totalVotes, userObj)}
      {singleQuestionResult(question.optionTwo, totalVotes, userObj)}
    </div>
  );
}

function singleQuestionResult(questionOption, totalVotes, userObj) {
  return (
    <div className="result">
      {questionOption.votes.includes(userObj.id) ? (
        <div className="voteHeader">YOUR VOTE</div>
      ) : (
        ""
      )}

      <div>{questionOption.text}</div>
      <div>
        <div>
          {calculatePercentage(questionOption.votes.length, totalVotes)}
        </div>
        <div>
          {questionOption.votes.length} out of {totalVotes} votes
        </div>
      </div>
    </div>
  );
}

function calculatePercentage(optionVotes, totalVotes) {
  return ((optionVotes / totalVotes) * 100).toFixed(3).toString() + "%";
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;

  return {
    id,
    users,
    authedUser,
    questions
  };
}

export default connect(mapStateToProps)(QuestionPage);
