export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER = "UPDATE_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function updateUser(formattedUser, questionId) {
  return {
    type: UPDATE_USER,
    formattedUser,
    questionId
  };
}

export function handleUpdateUser(response, questionId) {
  return (dispatch, getState) => {
    const { users, authedUser, questions } = getState();
    let formattedUser = users[authedUser];

    let question = questions[questionId];

    if (question && question.optionOne.text === response.radioOption) {
      formattedUser.answers[questionId] = "optionOne";
    } else if (question && question.optionTwo.text === response.radioOption) {
      formattedUser.answers[questionId] = "optionTwo";
    }

    dispatch(updateUser(formattedUser, questionId));
  };
}
