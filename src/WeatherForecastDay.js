import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={33} />
      </div>{" "}
      <div className="WeatherForecastTemps">
        <span className="WeatherForecastTemp-max">{maxTemp()} </span> |
        <span className="WeatherForecastTemp-min"> {minTemp()} </span>
      </div>
    </div>
  );
}
