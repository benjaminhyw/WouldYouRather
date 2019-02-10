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

    return (
      <div className="user">
        <div className="flexbox">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="divider" />
          <div>SECOND USER SECTION</div>
          <div className="divider" />
          <div>THIRD USER SECTION</div>
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
