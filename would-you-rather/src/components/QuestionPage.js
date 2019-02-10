import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionPage extends Component {
  render() {
    return <Question id={this.props.id} />;
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;

  return {
    id
  };
}

export default connect(mapStateToProps)(QuestionPage);
