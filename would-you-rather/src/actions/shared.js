import { getInitialData } from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}

export function loginUser(authed_id) {
  return dispatch => {
    return dispatch(setAuthedUser(authed_id));
  };
}
