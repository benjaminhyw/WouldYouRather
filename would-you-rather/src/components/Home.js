import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Home</h3>
        {this.props.users.map(user => {
          return <p key={user}>{user}</p>;
        })}

        {this.props.questions.map((question, index) => {
          return <p key={index}>{question}</p>;
        })}
        <Login />
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    users: Object.keys(users),
    questions: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(Home);
