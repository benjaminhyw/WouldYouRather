import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Question from "./Question";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Home</h3>
        <ul className="dashboard-list">
          {this.props.userIds.map(userId => {
            return <p key={userId}>{userId}</p>;
          })}

          {this.props.questionIds.map(questionId => {
            return (
              <li key={questionId}>
                <Question id={questionId} questionDisplay={QuestionSnippet} />
              </li>
            );
          })}
        </ul>
        <Login />
      </div>
    );
  }
}

function QuestionSnippet(question) {
  return (
    <div>
      <div>Would you rather...</div>
      <div>...{question.optionOne.text}...</div>
      <Link to={`/questionPage/${question.id}`}>
        <button className="btn">View Poll</button>
      </Link>
    </div>
  );
}

function mapStateToProps({ users, questions }) {
  return {
    userIds: Object.keys(users),
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(Home);
