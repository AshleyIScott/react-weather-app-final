import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Vancouver</h1>
      <ul>
        <li>Wednesday 8:30 </li>
        <li> Sunset with clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span className="temperature">15 </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2% </li>
            <li>Humidity: 58% </li>
            <li>Wind: 11 km/h</li>
          </ul>
        </div>
      </div>
      🦐
    </div>
  );
}
