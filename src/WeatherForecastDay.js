import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecastDay">{props.data.dt}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={33} />
      </div>{" "}
      <div className="WeatherForecastTemps">
        <span className="WeatherForecastTemp-max">
          {props.data.temp.max}°C{" "}
        </span>{" "}
        |
        <span className="WeatherForecastTemp-min">
          {" "}
          {props.data.temp.min}°C{" "}
        </span>
      </div>
    </div>
  );
}
