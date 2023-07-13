import { useState } from "react";

import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const add = good + neutral + bad;

  return (
    <div>
      <Button
        add={add}
        good={good}
        bad={bad}
        neutral={neutral}
        handleBadClick={handleBadClick}
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
      />
    </div>
  );
};
export default App;
