import React from "react";
import firstImage from "../../../assets/images/whiteWallChild.jpg";
import { Link } from "react-router-dom";

export default function WallsSection() {
  return (
    <div className="firstSection">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-12 col-md-5">
          <div className="row">
            <div className="col-12">
              <h1>Flower Walls - Available to Hire</h1>
            </div>
            <div className="bigScreen">
              <div className="col-12">
                <p>
                  Our walls are available throughout South, East and West Wales.
                  Please see our choice of walls, to create the perfect photo
                  opportunity, for your special occasion.
                </p>
              </div>
              <div className="col-12 pt-5">
                <button className="btn">
                  <Link to="/walls">See our walls</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 offset-md-1 pt-3">
          <img src={firstImage} alt="" />
        </div>
        <div className="smallScreen pt-5">
          <div className="col-12">
            <p>
              Our walls are available throughout South, East and West Wales.
              Please see our choice of walls, to create the perfect photo
              opportunity, for your special occasion.
            </p>
          </div>
          <div className="col-12 pt-5">
            <button className="btn">
              <Link to="/walls">See our walls</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
