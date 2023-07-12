const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.add}</p>
      <p>
        Average:{" "}
        {(props.good - props.bad) / (props.good + props.neutral + props.bad) ||
          0}
      </p>
      <p>
        Positive:{" "}
        {(props.good + props.bad) / (props.good + props.neutral + props.bad) ||
          0}
        %
      </p>
    </div>
  );
};

export default Statistics;
