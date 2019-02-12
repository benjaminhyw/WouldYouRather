import React, { Component } from "react";
import { connect } from "react-redux";
import { formatUser } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

class User extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <p>This user doesn't exist</p>;
    }
    const { id, name, answers, questions, avatar } = user;
    let answersLength = answers.length > 0 ? answers.length : 0;
    let questionsLength = questions.length > 0 ? questions.length : 0;

    return (
      <div className="user">
        <div className="flexbox">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="divider" />
          <div>
            <div>{name}</div>
            <div>Questions Answered : {answersLength}</div>
            <div>Questions Asked: {questionsLength}</div>
          </div>
          <div className="divider" />
          <div>
            <div>Score</div>
            <div>{(answersLength + questionsLength).toString()}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const user = users[id];

  return {
    authedUser,
    user: user ? formatUser(user, authedUser) : null
  };
}

export default withRouter(connect(mapStateToProps)(User));
