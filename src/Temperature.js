import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <span>
            <strong id="temperature"> 2 </strong>
            <small className="units">
              <a href="https://google.com"  rel="noreferrer" id="celsius-link">
                °C{" "}
              </a>{" "}
              |{" "}
              <a href="https://google.com" rel="noreferrer" id="fahrenheit-link">
                °F
              </a>
            </small>
          </span>
        </div>
      </div>
      <div className="col-6">
        <ul className="details">
          <li>
            Feels like: 9 <span id="feel"></span>°
          </li>
          <li>
            Humidity: 5 <span id="humidity"></span>%
          </li>
          <li>
            Wind: 10 <span id="wind"></span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
