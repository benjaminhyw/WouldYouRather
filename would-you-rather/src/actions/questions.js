import { generateUID } from "../utils/helpers";

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

    if (formattedQuestion.optionOne.text === response.radioOption) {
      formattedQuestion.optionOne.votes.push(authedUser);
    } else if (formattedQuestion.optionTwo.text === response.radioOption) {
      formattedQuestion.optionTwo.votes.push(authedUser);
    }
    console.log(formattedQuestion);

    dispatch(updateQuestion(formattedQuestion, questionId));
  };
}

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  };
}

export function handleCreateQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    let formattedQuestion = {
      id: generateUID(),
      author: authedUser,
      optionOne: { votes: [], text: question.optionOne },
      optionTwo: { votes: [], text: question.optionTwo },
      timestamp: Date.now()
    };

    dispatch(createQuestion(formattedQuestion));
  };
}
