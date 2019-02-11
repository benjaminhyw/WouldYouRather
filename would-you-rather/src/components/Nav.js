import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from "../actions/shared";

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
              <li>Hello, {this.props.users[this.props.authedUser].name}</li>
              <li>
                <Link to="/" onClick={this.logout}>
                  Logout
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    );
  }

  logout() {
    this.props.dispatch(logoutUser);
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Nav);
