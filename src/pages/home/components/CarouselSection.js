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
  const images = [
    event1,
    event2,
    peterRabbitWall,
    jungleWall,
    babyWall,
    babyShower,
  ];

  const groupImages = () => {
    const r = [];
    for (let i = 0; i < images.length; i = i + 2) {
      r.push([images[i], images[i + 1]]);
    }
    console.log(r);
    return r;
  };

  const carouselMobile = (
    <Carousel autoPlay infiniteLoop showThumbs={false} className="mb-4">
      {images.map((p, i) => {
        return (
          <div className="row justify-content-center" key={`small-screen-${i}`}>
            <div
              className="carouselImg col-12"
              style={{ backgroundImage: `url(${p})` }}
            ></div>
          </div>
        );
      })}
    </Carousel>
  );

  const careouselDesktop = (
    <Carousel autoPlay infiniteLoop showThumbs={false} className="mb-4">
      {groupImages().map((x, i) => (
        <div
          className="row justify-content-center"
          key={`big-screen-page-${i}`}
        >
          {x.map((p, j) => {
            return (
              <div
                className="carouselImg col-6"
                style={{ backgroundImage: `url(${p})` }}
                key={`big-screen-${j}`}
              ></div>
            );
          })}
        </div>
      ))}
    </Carousel>
  );

  const showMobile = window.innerWidth <= 576;

  return (
    <>
      {showMobile && carouselMobile}
      {!showMobile && careouselDesktop}
    </>
  );
}
