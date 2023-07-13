import StatisticsLine from "./statisticsLine";

const Statistics = (props) => {
  if (props.add === 0) {
    return <div>No Feedback has given</div>;
  }
  return (
    <div>
      <StatisticsLine
        add={props.add}
        good={props.good}
        bad={props.bad}
        neutral={props.neutral}
      />
    </div>
  );
};

export default Statistics;
