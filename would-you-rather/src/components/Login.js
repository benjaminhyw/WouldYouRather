import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Dropdown } from "office-ui-fabric-react";
import { formatUserIdsDropdown } from "../utils/helpers";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props; // might change to locally defined

    return (
      <div className="center login">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="loginField">
            <Field
              name="userId"
              placeholder="Select User"
              component={Dropdown}
              options={this.props.userIds}
            />
            <button>Submit</button>
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
    userIds: formatUserIdsDropdown(Object.keys(users))
  };
}

export default connect(mapStateToProps)(LoginForm);
