import React, { useState } from "react";
import Statistics from "./components/statistics/Statistics.js";
import Section from "./components/Section/Section.js";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.js";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = (value) => {
    switch (value) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        alert("error");
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const totalCalc = good + neutral + bad;
    return (totalCalc === 0 ? 0 : (good / totalCalc) * 100).toFixed();
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        leaveFeedback={onBtnClick}
      />
      {countTotalFeedback(good, neutral, bad) === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercent={countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        />
      )}
    </Section>
  );
};

export default App;

// export default class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   onBtnClick = (value) => {
//     this.setState((currentState) => {
//       return {
//         [value]: currentState[value] + 1,
//       };
//     });
//   };

// countTotalFeedback = (good, neutral, bad) => {
//   return good + neutral + bad;
// };

//   countPositiveFeedbackPercentage = (good, neutral, bad) => {
//     const totalCalc = good + neutral + bad;
//     return (totalCalc === 0 ? 0 : (good / totalCalc) * 100).toFixed();
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
// <Section title="Please leave feedback">
//   <FeedbackOptions
//     options={["good", "neutral", "bad"]}
//     leaveFeedback={this.onBtnClick}
//   />
//   {this.countTotalFeedback(good,neutral,bad) === 0 ? <p>No feedback given</p> :
//   <Statistics
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     total={this.countTotalFeedback(good, neutral, bad)}
//     positivePercent={this.countPositiveFeedbackPercentage(
//       good,
//       neutral,
//       bad
//     )}
//   />}
// </Section>
//     );
//   }
// }
