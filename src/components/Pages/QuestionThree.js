import React from 'react';
import { StepProgressBar } from '../StepProgressBar/StepProgressBar';

export const QuestionThree = () => {
  // Hard coded the array of location data
  const locationData = [
    'Living Room',
    'Dining Room',
    'Bedroom',
    'Nursery',
    'Office',
    'Kitchen',
    'Bathroom',
    'Patio',
    'Other',
  ];

  let sortedLocationData = locationData.sort();

  let progressBarPercent = 50;

  return (
    <div>
      <StepProgressBar percent={progressBarPercent} />
      <div className="question-three">
        <div className="question-prompt">
          <h2>Where will it go?</h2>
          <p>
            Select locations where you think your furniture will be located?
          </p>
        </div>
        <div className="option-three">
          {sortedLocationData.map((items, index) => {
            return (
              <div key={index} className="furniture-location">
                <a href="/question-four">{items}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
