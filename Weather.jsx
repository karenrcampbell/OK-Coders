import React, { useEffect, useState } from 'react';
import DayCard from './DayCard';

const Weather = () => {
  const [zipCode, setZipCode] = useState('');
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState('');
  const weatherApiKey = '3947aa6f76c942e9a46154726230306';

  const getForecast = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${zipCode}&days=7&aqi=no&alerts=no`;

    try {
      const res = await fetch(url);
      const { forecast, location } = await res.json();
      setForecastData(forecast.forecastday);
      setLocation(`${location.name}, ${location.region}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleButtonClick = () => {
    getForecast();
  };

  return (
    <div className="weather-container">
      <div className="input-container">
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          name="zipCode"
          type="number"
          placeholder="Enter Your Zip Code"
          value={zipCode}
          onChange={handleZipCodeChange}
        />
        <button onClick={handleButtonClick}>Get Forecast</button>
      </div>
      {location && <div className="location">{location}</div>}
      <div className="day-cards-container">
        {forecastData.map(({ date, day: { condition, maxtemp_f } }) => (
          <DayCard
            key={date}
            date={date}
            conditionImageUrl={condition.icon}
            condition={condition.text}
            highTemp={maxtemp_f}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
