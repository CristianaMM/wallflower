import React from "react";
import etsy from "../../../assets/images/etsy.png";
import letter from "../../../assets/images/letter.jpg";
import { Link } from "react-router-dom";

export default function BoxBuy() {
  return (
    <div id="boxBuy" className="container my-5">
      <div className="row text-center justify-content-center p-3">
        <div className="col-8 col-md-4 col-lg-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.etsy.com/shop/ThewallflowercoGifts?ref=simple-shop-header-name&listing_id=1004311771"
          >
            <div className="buyCard h-100 p-3">
              <div className="row h-100 flex-column align-items-center justify-content-between">
                <img src={etsy} alt="etsy store link" />
                <h3 className="pt-3">Buy Now!</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-8 col-md-4 col-lg-3 pt-5 pt-md-0">
          <Link to="/contact">
            <div className="buyCard h-100 p-3">
              <div className="row h-100 flex-column align-items-center justify-content-between">
                <img src={letter} alt="letter" />
                <h3 className="pt-3">Contact us!</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
