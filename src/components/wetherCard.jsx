import React from 'react';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
    const weather = useSelector((state) => state.weather);
    const status  = useSelector((state) => state.weather.status);


    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if(status === 'faild') {
        return <div>Something went wrong</div>
    }

     return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  )

}

export default WeatherCard