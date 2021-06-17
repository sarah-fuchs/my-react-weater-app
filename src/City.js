import "./City.css";

export default function City() {
  return (
    <div className="City">
      <div className="row">
        <div className="col-6">
         
        </div>
        <div className="col-12">
          <h1 id="city">  </h1>
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
