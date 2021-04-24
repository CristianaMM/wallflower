import React from "react";
import teaBox from "../../../assets/images/teaBox.jpg";

export default function BoxContent() {
  return (
    <>
      <div className="col-12 col-md-4  text-start order-2 order-md-1">
        <h5>Box includes:</h5>
        <ul>
          <li>Choice of coaster</li>
          <li>2 x tea bags</li>
          <li>2 x biscuits (varied flavour)</li>
        </ul>
        <p className="text-center text-md-start">
          All on a bed of rose petals with the choice to add a hand written
          heart gift tag.
        </p>
        <div className="text-center mt-5">
          <button className="btn">
            <a href="#boxBuy">Buy Now ! </a>
          </button>
        </div>
      </div>
      <div className="col-12 col-md-5 order-1 order-md-2">
        <img src={teaBox} alt="" />
      </div>
    </>
  );
}
