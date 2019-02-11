import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Dropdown } from "office-ui-fabric-react";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props; // might change to locally defined

    return (
      <div className="center">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="userId" component={Dropdown} type="text" options />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;
