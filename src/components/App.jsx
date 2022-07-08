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

  render() {
    return <Section state={this.state} />;
  }
}

export default App;
