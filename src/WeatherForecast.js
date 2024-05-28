import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely
&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
