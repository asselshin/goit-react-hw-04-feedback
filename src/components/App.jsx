import React from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions'; 
import Notification from './Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButton = opt => {
    this.setState(prevState => {
      return {
        [opt]: prevState[opt] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, score) => total + score, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickButton}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>}
          
        </Section>
      </div>
    );
  }
}

export default App;