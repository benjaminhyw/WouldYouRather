import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class NewQuestionForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center createNewQuestion">
        <h3>Create New Question</h3>
        <div>Would you rather ...</div>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <Field
              name="optionOne"
              placeholder="Type first option"
              component="input"
              type="input"
              autoFocus
            />
          </div>
          <div>OR</div>
          <div>
            <Field
              name="optionTwo"
              placeholder="Type second option"
              component="input"
              type="input"
              autoFocus
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

NewQuestionForm = reduxForm({
  form: "newQuestion"
})(NewQuestionForm);

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
  };
}

export default connect(mapStateToProps)(NewQuestionForm);
