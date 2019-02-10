export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;
  //   const { optionOneVotes, optionOneText } = optionOne;
  //   const { optionTwoVotes, optionTwoText } = optionTwo;
  // const { name, avatarURL, answers, questions } = author;

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL
  };
}
