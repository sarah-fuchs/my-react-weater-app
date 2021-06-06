import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [city, setCity] = useState(props.city);
  const [newCity, setNewCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setNewCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Form">
      <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              id="city-input"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100"
            />
          </div>
        </div>
        <br />
        <strong> The temperature in {newCity} is 19°C </strong>
      </form>
    </div>
  );
}
