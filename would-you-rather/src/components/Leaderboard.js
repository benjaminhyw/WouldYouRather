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
              {this.props.userIds.map(userId => {
                return (
                  <li key={userId}>
                    <User id={userId} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

  submit = event => {
    this.props.dispatch(loginUser(event.userId));
  };
}

function mapStateToProps({ users, authedUser }) {
  return {
    userIds: Object.keys(users),
    authedUser
  };
}

export default connect(mapStateToProps)(Leaderboard);
