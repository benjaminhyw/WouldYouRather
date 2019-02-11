export const SET_USER_QUESTION_DETAILS = "SET_USER_QUESTION_DETAILS";

export function setUserQuestionDetails(userQuestionDetails) {
  return {
    type: SET_USER_QUESTION_DETAILS,
    userQuestionDetails
  };
}
