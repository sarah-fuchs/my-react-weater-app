import "./City.css";
import Logo from "./images/logo.svg";

export default function City() {
  return (
    <div className="City">
      <div className="row">
        <div className="col-6">
          <img src={Logo} alt="weather-logo" width="100px" />
        </div>
        <div className="col-12">
          <h1 id="city"> Vienna </h1>
        </div>
        <span id="country"></span>
        <ul>
          <li>
            Last updated: 5:00 pm <span id="date"></span>
          </li>
          <li id="description">Clear</li>
        </ul>
      </div>
    </div>
  );
}
