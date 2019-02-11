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
    <div>
      {userObj.answers[question.id]
        ? QuestionResults(question)
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

function QuestionResults(question) {
  console.log(question);
  let totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  return (
    <div>
      <h3>Results:</h3>
      <div>
        <div>{question.optionOne.text}</div>
        <div>
          <div>
            {calculatePercentage(question.optionOne.votes.length, totalVotes)}
          </div>
          <div>
            {question.optionOne.votes.length} out of {totalVotes} votes
          </div>
        </div>
      </div>
      <div>{question.optionTwo.text}</div>
      <div>
        <div>
          {calculatePercentage(question.optionTwo.votes.length, totalVotes)}
        </div>
        <div>
          {question.optionTwo.votes.length} out of {totalVotes}votes
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
