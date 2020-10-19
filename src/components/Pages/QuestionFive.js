import React from 'react';

import { StepProgressBar } from '../StepProgressBar/StepProgressBar';

export const QuestionFive = () => {
  const locationUseData = [
    'Work Surface',
    'Eating',
    'Drinking',
    'Storage',
    'Sitting',
    'Studying',
    'Heavy Objects',
    'Display Items',
    'Other',
  ];

  let sortedLocationUseData = locationUseData.sort();

  // Not the best method to prevent anchor tags from being clicked on
  const handleClick = (event) => {
    return event.preventDefault();
  };

  const progressBarPercent = 100;

  return (
    <div>
      <StepProgressBar percent={progressBarPercent} />
      <div className="question-five">
        <div className="product-use-prompt">
          <h2>What will you use it for?</h2>
          <p>
            Your choices help us make the right decisions in design and
            fabrication
          </p>
        </div>
        <div className="option-five">
          {sortedLocationUseData.map((items, index) => {
            return (
              <div key={index} className="product-usage">
                <a href="/" onClick={handleClick}>
                  {items}
                </a>
              </div>
            );
          })}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};
