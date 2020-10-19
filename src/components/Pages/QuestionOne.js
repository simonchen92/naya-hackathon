import React from 'react';
import { Link } from 'react-router-dom';
import { StepProgressBar } from '../StepProgressBar/StepProgressBar';

export const QuestionOne = () => {
  // Beginning of the progress bar
  const progressBarPercent = 0;

  return (
    <div>
      <StepProgressBar percent={progressBarPercent} />
      <div className="question-one">
        <h2>Do you have an idea of funiture you would like to create?</h2>
        <div className="options">
          <Link to={{ pathname: '/question-two' }}>Yes</Link>
          <Link to={{ pathname: '/question-two' }}>No</Link>
        </div>
      </div>
    </div>
  );
};
