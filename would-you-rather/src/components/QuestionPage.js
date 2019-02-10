import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Link } from "react-router-dom";

class QuestionPage extends Component {
  render() {
    return <Question id={this.props.id} questionDisplay={QuestionPoll} />;
  }
}

function QuestionPoll(question) {
  return (
    <div>
      <div>Would you rather...</div>
      <div>...{question.optionOne.text}...</div>
      <div>OR</div>
      <div>...{question.optionTwo.text}...</div>
      <button className="btn">Submit</button>
    </div>
  );
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;

  return {
    id
  };
}

export default connect(mapStateToProps)(QuestionPage);
