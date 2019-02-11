import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  authedUser,
  users,
  questions,
  form: reduxFormReducer
});
