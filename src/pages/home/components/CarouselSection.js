import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import babyWall from "../../../assets/images/babyWall.jpg";
import babyShower from "../../../assets/images/pinkBabyShower.jpg";
import event1 from "../../../assets/images/event2.jpg";
import event2 from "../../../assets/images/event1.jpg";
import peterRabbitWall from "../../../assets/images/peterRabbitWall.jpg";
import jungleWall from "../../../assets/images/jungleWall.jpg";

export default function CarouselSection() {
  return (
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
  );
}
