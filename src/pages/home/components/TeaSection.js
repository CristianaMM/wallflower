import React from "react";
import tea1 from "../../../assets/images/tea1.jpg";
import tea2 from "../../../assets/images/tea2.jpg";
import tea3 from "../../../assets/images/tea3.jpg";
import tea4 from "../../../assets/images/tea4.jpg";
import teaTitle from "../../../assets/images/YouMeTeaLogo.jpg";

export default function TeaSection() {
  return (
    <div className="tea">
      <div className="row text-center align-items-center">
        <div className="col-12 pb-5">
          <h1>NEW! Letterbox Gift Shop</h1>
          <p>Give the gift off a cuppa</p>
        </div>
        <div className="col-4 offset-1">
          <img src={teaTitle} alt="" />
        </div>
        <div className="col-5 offset-1">
          <div className="row g-4">
            <div className="col-6">
              <img src={tea1} alt="" />
            </div>
            <div className="col-6">
              <img src={tea2} alt="" />
            </div>
            <div className="col-6">
              <img src={tea3} alt="" />
            </div>
            <div className="col-6">
              <img src={tea4} alt="" />
            </div>
          </div>
        </div>
        <div className="col-6 text-center">
          <button className="btn">More info</button>
        </div>
      </div>
    </div>
  );
}
