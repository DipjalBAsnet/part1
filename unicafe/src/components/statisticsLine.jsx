const StatisticsLine = (props) => {
  if (props.add === 0) {
    return <div>No Feedback has given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>All: </td>
            <td>{props.add}</td>
          </tr>{" "}
          <tr>
            <td>Average: </td>
            <td>
              {(props.good - props.bad) /
                (props.good + props.neutral + props.bad) || 0}
            </td>
          </tr>{" "}
          <tr>
            <td>Poistive: </td>
            <td>
              {(props.good + props.bad) /
                (props.good + props.neutral + props.bad) || 0}{" "}
              %
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default StatisticsLine;
