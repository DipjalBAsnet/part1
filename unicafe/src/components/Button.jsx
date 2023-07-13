import Statistics from "./Statistics";

const Button = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={props.handleGoodClick}>good</button>
      <button onClick={props.handleNeutralClick}>neutral</button>
      <button onClick={props.handleBadClick}>bad</button>
      <h2>statistics</h2>
      <Statistics
        add={props.add}
        good={props.good}
        bad={props.bad}
        neutral={props.neutral}
      />
    </div>
  );
};
export default Button;
