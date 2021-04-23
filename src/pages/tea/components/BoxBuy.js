import React from "react";
import greenBall from "../../../assets/images/greenBall1.jpg";
import etsy from "../../../assets/images/etsy.png";

export default function BoxBuy() {
  return (
    <div className="youMeTea container my-5">
      <div className="row text-center justify-content-center p-3">
        <div className="col-12 col-md-3">
          <div className="buyCard p-3">
            <img src={etsy} alt="" />
            <h3 className="pt-3">Buy Now!</h3>
          </div>
        </div>
        <div className="col-12 col-md-3 offset-md-2">
          <div className="buyCard p-3">
            <img src={etsy} alt="" />
            <h3 className="pt-3">Contact us!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
