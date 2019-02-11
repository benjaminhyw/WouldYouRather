import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/newQuestion" exact activeClassName="active">
              Create New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact activeClassName="active">
              Leaderboard
            </NavLink>
          </li>
        </ul>
        <ul>
          {this.props.authedUser && (
            <div className="flexbox">
              <li>Hello, {this.props.authedUser}</li>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Logout
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);
