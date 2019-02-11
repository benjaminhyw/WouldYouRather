import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Dropdown } from "office-ui-fabric-react";
import { formatUserIdsDropdown } from "../utils/helpers";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props; // might change to locally defined

    return (
      <div className="center">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="userId"
              component={Dropdown}
              type="text"
              options={this.props.userIds}
            />
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

function mapStateToProps({ users }) {
  return {
    userIds: formatUserIdsDropdown(Object.keys(users))
  };
}

export default connect(mapStateToProps)(LoginForm);
