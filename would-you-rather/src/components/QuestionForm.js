import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class QuestionForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    let optionOneText = this.props.question.optionOne.text;
    let optionTwoText = this.props.question.optionTwo.text;

    return (
      <div className="center">
        <div>Would you rather ...</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <Field
                name="radioOption"
                component="input"
                type="radio"
                value={this.props.question.optionOne.text}
              />
              {this.props.question.optionOne.text}
            </label>
          </div>
          <div>
            <label>
              <Field
                name="radioOption"
                component="input"
                type="radio"
                value={this.props.question.optionTwo.text}
              />
              {this.props.question.optionTwo.text}
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

QuestionForm = reduxForm({
  form: "question"
})(QuestionForm);

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
  };
}

export default connect(mapStateToProps)(QuestionForm);
