import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = total =>
    `${Math.round((this.state.good / total) * 100)}%`;

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state);
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onButtonClick={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            // <Notification message="There is no feedback" />
            <Notification message="no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
