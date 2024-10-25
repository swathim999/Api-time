import React, { useEffect, useState } from 'react';
import { getHoroscope } from '../service/api'; // getSigns is not needed here

export const Horoscope = ({ sign, timeframe }) => {
  const [horoscope, setHoroscope] = useState(''); // initialize as an empty string

  useEffect(() => {
    getHoroscope(sign, timeframe)
      .then((data) => {
        // Handle the API response
        if (data && data.horoscope) {
          setHoroscope(data.horoscope);
        } else {
          setHoroscope('No horoscope available for this combination.');
        }
      })
      .catch((error) => {
        console.error('Failed to fetch horoscope:', error);
        setHoroscope('Failed to load horoscope. Please try again later.');
      });
  }, [sign, timeframe]);

  return (
    <div>
      <h2>
        {timeframe}, your horoscope for {sign} is...
      </h2>
      <p>{horoscope}</p>
    </div>
  );
};
