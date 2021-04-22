import React from "react";
import firstImage from "../../../assets/images/whiteWallChild.jpg";

export default function WallsSection() {
  return (
    <div className="firstSection">
      <div className="row align-items-center">
        <div className="col-7">
          <div className="row">
            <div className="col-12">
              <h1>Flower Walls - Available to Hire</h1>
            </div>
            <div className="col-12">
              <p>
                Our walls are available throughout South, East and West Wales.
                Please see our choice of walls, to create the perfect photo
                opportunity, for your special occasion.
              </p>
            </div>
            <div className="col-12 pt-5">
              <button className="btn">See our walls</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <img src={firstImage} alt="" />
        </div>
      </div>
    </div>
  );
}
