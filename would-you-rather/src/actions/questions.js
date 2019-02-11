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
