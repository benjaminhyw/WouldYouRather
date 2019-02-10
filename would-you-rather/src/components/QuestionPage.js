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

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;

  return {
    id
  };
}

export default connect(mapStateToProps)(QuestionPage);
