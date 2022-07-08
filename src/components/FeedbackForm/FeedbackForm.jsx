import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedbackButton, FeedbackForm } from './FeedbackForm.styled';

class FeedBackForm extends Component {
  static propTypes = {
    onFeedbackLeave: PropTypes.func,
  };
  render() {
    const { onFeedbackLeave } = this.props;
    return (
      <FeedbackForm>
        <FeedbackButton type="button" name="good" onClick={onFeedbackLeave}>
          Good
        </FeedbackButton>
        <FeedbackButton type="button" name="neutral" onClick={onFeedbackLeave}>
          Neutral
        </FeedbackButton>
        <FeedbackButton type="button" name="bad" onClick={onFeedbackLeave}>
          Bad
        </FeedbackButton>
      </FeedbackForm>
    );
  }
}

export default FeedBackForm;
