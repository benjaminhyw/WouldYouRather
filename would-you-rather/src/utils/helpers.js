export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL
  };
}

export function formatUser(user, authedUser) {
  const { id, name, avatarURL, answers, questions } = user;

  return {
    id,
    name,
    answers,
    questions,
    avatar: avatarURL
  };
}
