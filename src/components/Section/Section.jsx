import React from 'react';
import PropTypes from 'prop-types';
import Statistic from 'components/Statistic/Statistic';
import FeedBackForm from 'components/FeedbackForm/FeedbackForm';
import { FeedbackContainer } from './Section.styled';

const Section = ({ state }) => {
  return (
    <FeedbackContainer>
      <FeedBackForm onFeedbackLeave={state.handleClick} />
      <Statistic value={state} />
    </FeedbackContainer>
  );
};

Section.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  handleClick: PropTypes.func,
};
export default Section;
