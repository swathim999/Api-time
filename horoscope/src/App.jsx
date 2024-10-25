import React, { useEffect, useState } from 'react';
import './App.css';
import { getSigns } from './service/api';
import { SelectSign } from './components/SelectSign';
import { SelectTimeframe } from './components/SelectTimeframe';
import { Horoscope } from './components/Horoscope';

function App() {
    const [signs, setSigns] = useState([]);
    const [selectedSign, setSelectedSign] = useState(null);
    const [selectedTimeframe, setSelectedTimeframe] = useState(null);

    const restart = () => {
        setSelectedSign(null);
        setSelectedTimeframe(null);
    };

    useEffect(() => {
        getSigns()
          .then(setSigns)
          .catch((error) => {
            console.error('Error fetching signs:', error);
        });
    }, []);

    return (
        <div className="App">
            <h1>The Horoscope App</h1>
            <SelectSign 
                signs={signs} 
                onSignSelected={setSelectedSign} 
                selectedSign={selectedSign} 
            />
            {selectedSign && (
                <SelectTimeframe 
                    onTimeframeSelected={setSelectedTimeframe} 
                    selectedTimeframe={selectedTimeframe}
                />
            )}
            {selectedSign && selectedTimeframe && (
                <Horoscope 
                    sign={selectedSign} 
                    timeframe={selectedTimeframe} 
                />
            )}
            <button onClick={restart}>Restart</button>
        </div>
    );
}

export default App;
