import { Component } from 'react';
import { Buttons } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const goodFeedback = this.state.good;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Number(((goodFeedback / total) * 100).toFixed(1));
  };

  onLeaveFeedback = name => {
    this.setState(p => ({ [name]: p[name] + 1 }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Buttons
            options={Object.keys(this.state)}
            click={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good === 0 && bad === 0 && neutral === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
