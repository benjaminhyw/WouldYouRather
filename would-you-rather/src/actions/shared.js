import { getInitialData } from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
