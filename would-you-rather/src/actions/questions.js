import { generateUID } from "../utils/helpers";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
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
