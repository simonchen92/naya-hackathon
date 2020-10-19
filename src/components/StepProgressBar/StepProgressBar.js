import React from 'react';
import { Link } from 'react-router-dom';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

export const StepProgressBar = ({ percent }) => {
  return (
    <div className="indexed-progress-bar">
      <ProgressBar percent={percent}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            >
              <Link to="/get-started">{index + 1}</Link>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            >
              <Link to="/question-two">{index + 1}</Link>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            >
              <Link to="/question-three">{index + 1}</Link>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            >
              <Link to="/question-four">{index + 1}</Link>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            >
              <Link to="/question-five">{index + 1}</Link>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};
