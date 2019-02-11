import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="center login">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="loginField">
            <Field
              name="userId"
              placeholder="Select User"
              component="select"
              type="select"
              autoFocus
            >
              {this.props.userIds.map(option => {
                return <option key={option}>{option}</option>;
              })}
            </Field>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
  };
}

export default connect(mapStateToProps)(LoginForm);
