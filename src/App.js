import React, { Component } from "react";
import Statistics from "./components/statistics/Statistics.js";
import Section from "./components/Section/Section.js";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.js";

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onBtnClick = (value) => {
    this.setState((currentState) => {
      return {
        [value]: currentState[value] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const totalCalc = good + neutral + bad;
    return (totalCalc === 0 ? 0 : (good / totalCalc) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          leaveFeedback={this.onBtnClick}
        />
        {this.countTotalFeedback(good,neutral,bad) === 0 ? <p>No feedback given</p> :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercent={this.countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        />}
      </Section>
    );
  }
}

// const App = () => (
//
// )

// export default App;
