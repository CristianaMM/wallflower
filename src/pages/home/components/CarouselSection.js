import React from "react";
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
    return r;
  };

  const renderImage = (key, image, size) => (
    <div
      key={key}
      className={`carouselImg col-${size}`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );

  const carouselMobile = (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      className="smallScreenCarousel mb-4"
    >
      {images.map((p, i) => {
        return (
          <div className="row justify-content-center" key={`small-screen-${i}`}>
            {renderImage(`image-small-${i}`, p, 12)}
          </div>
        );
      })}
    </Carousel>
  );

  const careouselDesktop = (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      className="bigScreenCarousel mb-4"
    >
      {groupImages().map((x, i) => (
        <div
          className="row justify-content-center"
          key={`big-screen-page-${i}`}
        >
          {x.map((p, j) => renderImage(`image-big-${j}`, p, 6))}
        </div>
      ))}
    </Carousel>
  );

  return (
    <>
      {carouselMobile}
      {careouselDesktop}
    </>
  );
}
