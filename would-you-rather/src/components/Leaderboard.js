import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Leaderboard</h3>
        {this.props.userIds.map(userId => {
          return <User id={userId} />;
        })}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Leaderboard);
