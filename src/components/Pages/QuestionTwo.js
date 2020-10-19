import React from 'react';
import { Link } from 'react-router-dom';
import { StepProgressBar } from '../StepProgressBar/StepProgressBar';

export const QuestionTwo = () => {
  // Step 2 of progress bar
  const progressBarPercent = 25;
  return (
    <div>
      <StepProgressBar percent={progressBarPercent} />
      <div className="question-two">
        <h2>Do you know how to communicate it?</h2>
        <div className="option-two">
          <Link to="/question-three">Yes</Link>
          <Link to="/question-three">No</Link>
        </div>
      </div>
    </div>
  );
};
