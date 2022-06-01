// import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setOption] = useState(0);
  const [neutral, setNetral] = useState(0);
  const [bad, setBad] = useState(0);
  // console.log(useState());

  const onLeaveFeedback = option => {
    setOption(prevState => prevState[option] + 1);
    // this.setState(prevState => ({
    //   [option]: prevState[option] + 1,
    // }));
  };
  const stateObjects = Object.values({ good, neutral, bad });
  const countTotalFeedback = state => {
    // console.log(state);
    // return state.reduce((acc, value) => acc + value, 0);
    return Object.values(state).reduce((acc, value) => acc + value, 1);
  };

  const countPositiveFeedbackPercentage = total =>
    `${Math.round((good / total) * 100)}%`;

  const stateKeys = Object.keys({ good, neutral, bad });
  const total = countTotalFeedback(good, neutral, bad);
  console.log(total);
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateKeys} onButtonClick={onLeaveFeedback} />
        {/* <FeedbackOptions options={stateKeys} onButtonClick={onLeaveFeedback} /> */}
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
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
