// Correct Export and Component Name
import React from 'react';

export const SelectTimeframe = ({ onTimeframeSelected, selectedTimeframe }) => {
    const timeframes = ['yesterday', 'today', 'tomorrow'];

    return (
        <div>
            <h2>Please select the timeframe</h2>
            <div className="grid">
                {timeframes.map((timeframe) => (
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
