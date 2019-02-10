import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Question from "./Question";

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Home</h3>
        {this.props.userIds.map(userId => {
          return <p key={userId}>{userId}</p>;
        })}

        {this.props.questionIds.map(questionId => {
          return (
            <li key={questionId}>
              <Question id={questionId} />
            </li>
          );
        })}
        <Login />
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    userIds: Object.keys(users),
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(Home);
