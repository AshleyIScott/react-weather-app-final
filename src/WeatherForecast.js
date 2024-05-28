import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className=" row">
        <div className="col">
          <div className="WeatherForecastDay">Mon</div>
          <div>
            <WeatherIcon code="01d" size={33} />
          </div>{" "}
          <div className="WeatherForecastTemps">
            <span className="WeatherForecastTemp-max">16°C </span> |
            <span className="WeatherForecastTemp-min"> 10°C </span>
          </div>
        </div>
      </div>
      🦩
    </div>
  );
}
