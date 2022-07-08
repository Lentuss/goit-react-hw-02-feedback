import React, { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

    handleClick: e => {
      this.setState(prev => {
        const stateTarget = e.target.name;
        return { [stateTarget]: prev[stateTarget] + 1 };
      });
      // alert('Thank for your feedback');
    },
  };

  countTotalFeedback = () => {
    const value = this.state;
    const total = value.good + value.neutral + value.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () =>
    Number.parseInt((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <Section
        state={this.state}
        total={this.countTotalFeedback()}
        positivePercent={this.countPositiveFeedbackPercentage()}
      />
    );
  }
}

export default App;
