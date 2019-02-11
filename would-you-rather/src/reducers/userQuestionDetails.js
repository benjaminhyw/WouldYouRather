import { SET_USER_QUESTION_DETAILS } from "../actions/userQuestionDetails";

export default function userQuestionDetails(state = null, action) {
  switch (action.type) {
    case SET_USER_QUESTION_DETAILS:
      return action.userQuestionDetails;
    default:
      return state;
  }
}
