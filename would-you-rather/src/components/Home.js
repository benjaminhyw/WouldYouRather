import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./Login";
import Question from "./Question";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/shared";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unansweredTabIsActive: true
    };
    this.activateUnansweredTab = this.activateUnansweredTab.bind(this);
    this.activateAnsweredTab = this.activateAnsweredTab.bind(this);
  }

  render() {
    let answeredQuestionIds = this.props.answeredQuestionIds;
    let unansweredQuestionIds = [...this.props.questionIds];
    answeredQuestionIds &&
      answeredQuestionIds.forEach(answeredQuestionId => {
        unansweredQuestionIds.splice(
          unansweredQuestionIds.indexOf(answeredQuestionId),
          1
        );
      });

    return (
      <div className="center">
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submit} />
        ) : (
          <div>
            <h3>Home</h3>
            <div className="questionList">
              <div className="questionListTabs">
                <div
                  className={
                    this.state.unansweredTabIsActive
                      ? "questionListActiveTab"
                      : ""
                  }
                  onClick={this.activateUnansweredTab}
                >
                  Unanswered
                </div>
                <div
                  className={
                    this.state.unansweredTabIsActive
                      ? ""
                      : "questionListActiveTab"
                  }
                  onClick={this.activateAnsweredTab}
                >
                  Answered
                </div>
              </div>
              <ul>
                {this.state.unansweredTabIsActive &&
                  unansweredQuestionIds.map(questionId => {
                    return (
                      <li key={questionId}>
                        <Question
                          id={questionId}
                          questionDisplay={QuestionSnippet}
                        />
                      </li>
                    );
                  })}
                {!this.state.unansweredTabIsActive &&
                  this.props.answeredQuestionIds.map(questionId => {
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

  activateUnansweredTab() {
    this.setState({
      unansweredTabIsActive: true
    });
  }

  activateAnsweredTab() {
    this.setState({
      unansweredTabIsActive: false
    });
  }

  submit = event => {
    this.props.dispatch(loginUser(event.userId));
  };
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
    users,
    answeredQuestionIds:
      users[authedUser] && Object.keys(users[authedUser].answers),
    userIds: Object.keys(users),
    questionIds: Object.keys(questions),
    authedUser
  };
}

export default connect(mapStateToProps)(Home);
