import React from 'react';

import { StepProgressBar } from '../StepProgressBar/StepProgressBar';

export const QuestionFour = () => {
  const selectionData = [
    'Chair',
    'Bench',
    'Desk',
    'Tall Table',
    'Side Table',
    'Standing Shelf',
    'Wall Shelf',
    'Nightstand',
    'Dining Table',
    'Table',
    'Coffee Table',
    'Other',
  ];

  let sortedSelectionData = selectionData.sort();

  const progressBarPercent = 75;

  return (
    <div>
      <StepProgressBar percent={progressBarPercent} />
      <div className="question-four">
        <div className="product-prompt">
          <h2>What do you want?</h2>
          <p>Pick the option that is the closest to your idea</p>
        </div>
        <div className="option-four">
          {sortedSelectionData.map((items, index) => {
            return (
              <div key={index} className="furniture-product">
                <a href="/question-five">{items}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
