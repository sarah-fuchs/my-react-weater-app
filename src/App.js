import React from "react";
import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherAppWrapper">
          <div className="weatherApp">
            <h1>Weather App</h1>
            <Form city="Vienna" temperature="19" />
            <City />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
