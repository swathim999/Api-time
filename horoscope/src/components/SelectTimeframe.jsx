import React from 'react';

export const SelectTimeframe = ({ onTimeframeSelected, selectedTimeframe }) => {
  return (
    <div>
        <h2>Please select a Timeframe...</h2>
        <div className="grid">
          {['yesterday', 'today', 'tomorrow'].map((timeframe) => (
              <button
                  className="timeframe"
                  key={timeframe}
                  onClick={() => onTimeframeSelected(timeframe)}
              >
                  {timeframe}
              </button>
          ))}
        </div>
        {selectedTimeframe && <h3>You selected: {selectedTimeframe}</h3>}
    </div>
  );
};
