const Button = ({ handleSelectedClick, voteChange }) => {
  return (
    <div>
      <button onClick={handleSelectedClick}>Next Anecdote</button>
      <button onClick={voteChange}>Vote</button>
    </div>
  );
};
export default Button;
