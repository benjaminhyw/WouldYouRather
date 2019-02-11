import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./Login";
import Question from "./Question";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="center">
        {!this.props.authedUser ? (
          <LoginForm />
        ) : (
          <div>
            <h3>Home</h3>
            <div>
              <div>
                <div>Unanswered</div>
                <div>Answered</div>
              </div>
              <ul>
                {this.props.questionIds.map(questionId => {
                  return (
                    <li key={questionId}>
                      <Question
                        id={questionId}
                        questionDisplay={QuestionSnippet}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
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

function mapStateToProps({ users, questions, authedUser }) {
  return {
    userIds: Object.keys(users),
    questionIds: Object.keys(questions),
    authedUser
  };
}

export default connect(mapStateToProps)(Home);
