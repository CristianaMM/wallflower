import React from "react";
import { Link } from "react-router-dom";
import { wallsInfo } from "../../utils";

export default function Walls() {
  return (
    <div className="container walls  text-center  py-5">
      <h1>Our Walls</h1>

      <p>Check out our choice of walls below!</p>
      <p>
        We can create the perfect photo opportunity for your special occasion!
      </p>
      <div className="row justify-content-center">
        {wallsInfo.map((w, i) => {
          return (
            <Link
              key={`wall-${i}`}
              className="wallCard col-12 col-sm-8 col-md-5 col-lg-4 m-2 p-0"
              style={{ backgroundImage: `url(${w.mainPhoto})` }}
              to={`/walls/${w.name}`}
            >
              <div className="cardText">
                <h5 className="text-center pt-1"> {w.name} </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
