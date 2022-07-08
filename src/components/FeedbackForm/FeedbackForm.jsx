import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedbackButton, FeedbackForm, FormTitle } from './FeedbackForm.styled';

class FeedBackForm extends Component {
  static propTypes = {
    onFeedbackLeave: PropTypes.func,
  };
  render() {
    return (
      <FeedbackForm>
        <FormTitle>Please, leave your feedback</FormTitle>
        <FeedbackButton
          type="button"
          name="good"
          onClick={this.props.onFeedbackLeave}
        >
          Good
        </FeedbackButton>
        <FeedbackButton
          type="button"
          name="neutral"
          onClick={this.props.onFeedbackLeave}
        >
          Neutral
        </FeedbackButton>
        <FeedbackButton
          type="button"
          name="bad"
          onClick={this.props.onFeedbackLeave}
        >
          Bad
        </FeedbackButton>
      </FeedbackForm>
    );
  }
}

export default FeedBackForm;
