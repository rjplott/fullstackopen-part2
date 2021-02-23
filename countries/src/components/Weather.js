import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({});
  const hook = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  };

  useEffect(hook, [country]);

  if (weather.current) {
    return (
      <div>
        <h2>Weather in {country.capital}</h2>
        <div>
          <strong>temperature:</strong> {weather.current.temperature} degrees
        </div>
        <img src={weather.current.weather_icons[0]} alt="Current weather" />
        <div>
          <strong>wind:</strong> {weather.current.wind_speed}{" "}
          {weather.current.wind_dir}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Weather;
