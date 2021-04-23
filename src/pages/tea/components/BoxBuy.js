import React from "react";
import greenBall from "../../../assets/images/greenBall1.jpg";
import etsy from "../../../assets/images/etsy.png";

export default function BoxBuy() {
  return (
    <div className="youMeTea">
      <div className="row pt-5 pb-5 align-items-center text-center ">
        <div className="col-5">
          <a>
            <img src={etsy} alt="" />
          </a>
        </div>
        <div className="col-2 ">
          <h1>OR</h1>
        </div>
        <div className="col-5  ">
          <a className="sendMessageParent">
            <img src={greenBall} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
