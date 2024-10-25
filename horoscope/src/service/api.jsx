// getSigns will fetch the list of zodiac signs from the API
export const getSigns = () => {
  return fetch('http://sandipbgt.com/theastrologer/api/sunsigns/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching signs:', error);
      return [];
    });
};

// getHoroscope will fetch the horoscope for a specific sign and timeframe
export const getHoroscope = (sign, timeframe) => {
  return fetch(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the entire response to inspect the data structure
      return data;
    })
    .catch((error) => {
      console.error('Error fetching horoscope:', error);
      return { horoscope: 'Failed to load horoscope.' };
    });
};
