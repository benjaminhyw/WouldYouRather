import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    const { question } = this.props;
    if (!question) {
      return <p>This question doesn't exist</p>;
    }
    const { id, name, avatar, optionOne, optionTwo } = question;
    return (
      <div className="question">
        <p>{name} asks:</p>
        <div className="flexbox">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="questionWrapper">
            <div>Would you rather...</div>
            <div>...{optionOne.text}...</div>
            <button className="btn">View Poll</button>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  };
}

export default withRouter(connect(mapStateToProps)(Question));
