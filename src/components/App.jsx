// import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  // const [option, setOption] = useState({
  //   good: 1,
  //   neutral: 2,
  //   bad: 3,
  // });
  const [good, setGood] = useState(0);
  const [neutral, setNetral] = useState(0);
  const [bad, setBad] = useState(0);
  // console.log(option.good);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNetral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = `${Math.round((good / total) * 100)}%`;
  // const statisticsData = { good, neutral };
  // setOption(prevState => {
  //   console.log([prevState]);
  //   return prevState[option] + 1;
  // });
  // this.setState(prevState => ({
  //   [option]: prevState[option] + 1,
  // }));

  // const countTotalFeedback = state => {
  //   // console.log(state);
  //   return Object.values(state).reduce((acc, value) => acc + value, 0);
  // };

  // const countPositiveFeedbackPercentage = total => {
  //   // console.log(Math.rouund(option.))
  //   return `${Math.round((option.good / total) * 100)}%`;
  // };

  // const { good, neutral, bad } = option;
  // const stateKeys = Object.keys(option);

  // const total = countTotalFeedback(option);
  // const positivePercentage = countPositiveFeedbackPercentage(total);

  // const stateObjects = Object.values({ good, neutral, bad });
  // const countTotalFeedback = state => {
  // console.log(state);
  // return state.reduce((acc, value) => acc + value, 0);
  // return Object.values(state).reduce((acc, value) => acc + value, 1);

  // const countPositiveFeedbackPercentage = total =>
  //   `${Math.round((good / total) * 100)}%`;

  // const stateKeys = Object.keys({ good, neutral, bad });
  // const total = countTotalFeedback(good, neutral, bad);
  // console.log(total);
  // const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onButtonClick={onLeaveFeedback}
        />
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
// const App = () => {
//   const [good, setOption] = useState(0);
//   const [neutral, setNetral] = useState(0);
//   const [bad, setBad] = useState(0);
//   // console.log(useState());

//   const onLeaveFeedback = option => {
//     setOption(prevState => prevState[option] + 1);
//     // this.setState(prevState => ({
//     //   [option]: prevState[option] + 1,
//     // }));
//   };
//   const stateObjects = Object.values({ good, neutral, bad });
//   const countTotalFeedback = state => {
//     // console.log(state);
//     // return state.reduce((acc, value) => acc + value, 0);
//     return Object.values(state).reduce((acc, value) => acc + value, 1);
//   };

//   const countPositiveFeedbackPercentage = total =>
//     `${Math.round((good / total) * 100)}%`;

//   const stateKeys = Object.keys({ good, neutral, bad });
//   const total = countTotalFeedback(good, neutral, bad);
//   console.log(total);
//   const positivePercentage = countPositiveFeedbackPercentage(total);

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={stateKeys} onButtonClick={onLeaveFeedback} />
//         {/* <FeedbackOptions options={stateKeys} onButtonClick={onLeaveFeedback} /> */}
//       </Section>
//       <Section title="Statistics">
//         {total ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </>
//   );
// };

// export default App;
