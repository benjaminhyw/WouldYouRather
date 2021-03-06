export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function updateQuestion(formattedQuestion, questionId) {
  return {
    type: UPDATE_QUESTION,
    formattedQuestion,
    questionId
  };
}

export function handleUpdateQuestion(response, questionId) {
  return (dispatch, getState) => {
    const { questions, authedUser } = getState();
    let formattedQuestion = questions[questionId];
    formattedQuestion.timestamp = Date.now();

    if (formattedQuestion.optionOne.text === response.radioOption) {
      formattedQuestion.optionOne.votes.push(authedUser);
    } else if (formattedQuestion.optionTwo.text === response.radioOption) {
      formattedQuestion.optionTwo.votes.push(authedUser);
    }

    dispatch(updateQuestion(formattedQuestion, questionId));
  };
}

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  };
}

export function handleCreateQuestion(question, questionID) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    let formattedQuestion = {
      id: questionID,
      author: authedUser,
      optionOne: { votes: [], text: question.optionOne },
      optionTwo: { votes: [], text: question.optionTwo },
      timestamp: Date.now()
    };

    dispatch(createQuestion(formattedQuestion));
  };
}
