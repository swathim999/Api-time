import React from 'react';

export const SelectSign = ({ signs, onSignSelected, selectedSign }) => {
    return (
        <div>
            <h2>Please select the sign</h2>
            <div className="grid">
                {signs.map((sign) => (
                    <button
                        className="sign"
                        key={sign}
                        onClick={() => onSignSelected(sign)}
                    >
                        {sign}
                    </button>
                ))}
            </div>
            {selectedSign && <h3>You selected: {selectedSign}</h3>}
        </div>
    );
};
