import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
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
        <li>Hello, USER</li>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
