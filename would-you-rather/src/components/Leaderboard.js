import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import LoginForm from "./Login";
import { loginUser } from "../actions/shared";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        {!this.props.authedUser ? (
          <LoginForm onSubmit={this.submit} />
        ) : (
          <div>
            <h3 className="center">Leaderboard</h3>
            <ul>
              {this.scoreSort().map(user => {
                return (
                  <li key={user.id}>
                    <User id={user.id} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

  scoreSort() {
    let userObjArr = this.props.userIds.map(userId => {
      return this.props.users[userId];
    });

    userObjArr.sort(this.compare);

    return userObjArr;
  }

  compare(a, b) {
    let aAnswers = Object.entries(a.answers);
    let bAnswers = Object.entries(b.answers);

    const scoreA = aAnswers.length + a.questions.length;
    const scoreB = bAnswers.length + b.questions.length;

    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  submit = event => {
    this.props.dispatch(loginUser(event.userId));
  };
}

function mapStateToProps({ users, authedUser }) {
  return {
    userIds: Object.keys(users),
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
