import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisicItem,
  TotalFeedbacks,
  PositivePercent,
  Notification,
} from './Statistic.styled';

class Statistic extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercent: PropTypes.number,
  };

  render() {
    const value = this.props.state;
    const totalFeedback = this.props.total;
    const positivePercent = this.props.positivePercent;

    return (
      <StatisticSection>
        <StatisticTitle>Statistics</StatisticTitle>
        {totalFeedback !== 0 ? (
          <>
            <StatisicItem type="good">Good: {value.good}</StatisicItem>
            <StatisicItem type="neutral">Neutral: {value.neutral}</StatisicItem>
            <StatisicItem type="bad">Bad: {value.bad}</StatisicItem>
            <TotalFeedbacks>Total feedback: {totalFeedback}</TotalFeedbacks>
            <PositivePercent>
              Positive feedback: {positivePercent}%
            </PositivePercent>
          </>
        ) : (
          <Notification>No feedback yet</Notification>
        )}
      </StatisticSection>
    );
  }
}

export default Statistic;
