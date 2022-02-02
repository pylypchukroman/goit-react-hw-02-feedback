import { Component } from "react";
import "./App.css";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import Notification from "./Components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

    handleClick = element => {
    this.setState(prevState => ({ [element]: prevState[element] + 1 }));
  };

  render() {
    let totalNumber = this.state.good + this.state.neutral + this.state.bad;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalNumber !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (<Notification message="There is no feedback"></Notification>)
          }
        </Section>

      </>
    );
  }
}

export default App;