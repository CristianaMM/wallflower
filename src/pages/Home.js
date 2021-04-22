import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import babyWall from "../assets/images/babyWall.jpg";
import babyShower from "../assets/images/pinkBabyShower.jpg";
import event1 from "../assets/images/event2.jpg";
import event2 from "../assets/images/event1.jpg";
import peterRabbitWall from "../assets/images/peterRabbitWall.jpg";
import jungleWall from "../assets/images/jungleWall.jpg";
import tea1 from "../assets/images/tea1.jpg";
import tea2 from "../assets/images/tea2.jpg";
import tea3 from "../assets/images/tea3.jpg";
import tea4 from "../assets/images/tea4.jpg";
import teaTitle from "../assets/images/YouMeTeaLogo.jpg";
import firstImage from "../assets/images/whiteWallChild.jpg";

export default function Home() {
  return (
    <div>
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

      <Carousel autoPlay infiniteLoop showThumbs={false} className="mb-4">
        <div className="row justify-content-center">
          <div
            className="carouselImg col-6"
            style={{ backgroundImage: `url(${event1})` }}
          ></div>
          <div
            className="carouselImg col-6"
            style={{ backgroundImage: `url(${event2})` }}
          ></div>
        </div>
        <div className="row justify-content-center">
          <div
            className="carouselImg col-6"
            style={{ backgroundImage: `url(${peterRabbitWall})` }}
          ></div>
          <div
            className="carouselImg col-6"
            style={{ backgroundImage: `url(${jungleWall})` }}
          ></div>
        </div>
        <div className="row justify-content-center">
          <div
            className="carouselImg col-6"
            style={{ backgroundImage: `url(${babyWall})` }}
          ></div>
          <div
            className="carouselImg col-6"
            style={{ backgroundImage: `url(${babyShower})` }}
          ></div>
        </div>
      </Carousel>
    </div>
  );
}
