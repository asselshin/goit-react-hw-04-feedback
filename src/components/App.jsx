import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions'; 
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  
  const all = { good, bad, neutral };

  const clickButton = opt => {
    switch (opt) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

    const countTotalFeedback = () => {
    return Object.values(all).reduce((total, score) => total + score, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100);
  };

  return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(all)}
            onLeaveFeedback={clickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>}          
        </Section>
      </div>
    );  
};
