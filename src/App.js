import React from "react";
import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import Temperature from "./Temperature";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherAppWrapper">
          <div className="weatherApp">
            <Form city="Vienna" temperature="19" />
            <City />
            <Temperature />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
