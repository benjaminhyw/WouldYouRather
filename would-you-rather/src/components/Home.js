import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
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

  timestampSort(questionIdsArr) {
    let sortedArr = questionIdsArr.map(questionId => {
      return this.props.questions[questionId];
    });

    sortedArr.sort(this.compare);

    return sortedArr;
  }

  compare(a, b) {
    const timestampA = a.timestamp;
    const timestampB = b.timestamp;

    let comparison = 0;
    if (timestampA > timestampB) {
      comparison = 1;
    } else if (timestampA < timestampB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  render() {
    let answeredQuestionIds = this.props.answeredQuestionIds;
    let unansweredQuestionIds = [...this.props.questionIds];

    unansweredQuestionIds = unansweredQuestionIds.filter(function(e) {
      return answeredQuestionIds && !answeredQuestionIds.includes(e);
    });

    unansweredQuestionIds &&
      (unansweredQuestionIds = this.timestampSort(unansweredQuestionIds));
    answeredQuestionIds &&
      (answeredQuestionIds = this.timestampSort(answeredQuestionIds));

    return (
      <div className="center">
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submitLogin} />
        ) : (
          <div>
            <h3>Home</h3>
            <div className="questionList">
              <div className="questionListTabs">
                <div
                  className={
                    this.state.unansweredTabIsActive
                      ? "questionListActiveTab questionListTab"
                      : "questionListTab"
                  }
                  onClick={this.activateUnansweredTab}
                >
                  Unanswered
                </div>
                <div
                  className={
                    this.state.unansweredTabIsActive
                      ? "questionListTab"
                      : "questionListActiveTab questionListTab"
                  }
                  onClick={this.activateAnsweredTab}
                >
                  Answered
                </div>
              </div>
              <ul>
                {this.state.unansweredTabIsActive &&
                  unansweredQuestionIds.map(question => {
                    return (
                      <li key={question.id}>
                        <Question
                          id={question.id}
                          questionDisplay={QuestionSnippet}
                        />
                      </li>
                    );
                  })}
                {!this.state.unansweredTabIsActive &&
                  answeredQuestionIds.map(question => {
                    return (
                      <li key={question.id}>
                        <Question
                          id={question.id}
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

  submitLogin = event => {
    this.props.dispatch(loginUser(event.userId));
  };
}

function QuestionSnippet(question) {
  return (
    <div>
      <div>Would you rather...</div>
      <div>...{question.optionOne.text}...</div>
      <Link to={`/questions/${question.id}`}>
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
    authedUser,
    questions
  };
}

export default connect(mapStateToProps)(Home);
