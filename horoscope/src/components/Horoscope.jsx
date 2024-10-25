import React, { useEffect, useState } from 'react';
import { getHoroscope, getSigns } from '../service/api';

export const Horoscope = ({ sign, timeframe }) => {
  const [horoscope, setHoroscope] = useState([]);
  useEffect( () => {
    getHoroscope(sign, timeframe).then(setHoroscope);
  }, []);
    return (
        <div>
            <h2>
              {timeframe}, your horoscope for {sign} is...
              </h2>
              <p>{horoscope}</p>
        </div>
    );
};
