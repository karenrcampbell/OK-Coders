import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const DayCard = ({ date, conditionImageUrl, condition, highTemp }) => {
  const options = { weekday: 'long' };
  const dayOfWeek = new Date(date).toLocaleString('en-US', options);

  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current);
  }, []);

  return (
    <div className="day-cards-container">
      <div className="day-card" ref={tiltRef}>
        <div className="day-card-header">{dayOfWeek}</div>
       
        <img alt="the daily condition" src={conditionImageUrl} />
        <div>{condition}</div>
        <br />
        <div>High: {Math.round(highTemp)}°F</div>
      </div>
    </div>
  );
};

export default DayCard;
