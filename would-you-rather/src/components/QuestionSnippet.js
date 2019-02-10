export default function QuestionSnippet() {
  return (
    <div>
      <div>Would you rather...</div>
      <div>...{optionOne.text}...</div>
      <Link to={`/questionPage/${id}`}>
        <button className="btn">View Poll</button>
      </Link>
    </div>
  );
}
