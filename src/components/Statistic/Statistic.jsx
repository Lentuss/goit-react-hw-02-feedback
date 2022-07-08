import React, { Component } from 'react';
import {
  StatisticSection,
  StatisticTitle,
  StatisicItem,
  TotalFeedbacks,
  PositivePercent,
  Notification,
} from './Statistic.styled';

class Statistic extends Component {
  render() {
    const value = this.props.value;
    const total = value.good + value.neutral + value.bad;
    const goodPercentage = Number.parseInt((value.good / total) * 100);
    return (
      <StatisticSection>
        <StatisticTitle>Statistics</StatisticTitle>
        {total !== 0 ? (
          <>
            <StatisicItem type="good">Good: {value.good}</StatisicItem>
            <StatisicItem type="neutral">Neutral: {value.neutral}</StatisicItem>
            <StatisicItem type="bad">Bad: {value.bad}</StatisicItem>
            <TotalFeedbacks>Total feedback: {total}</TotalFeedbacks>
            <PositivePercent>
              Positive feedback: {goodPercentage}%
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
