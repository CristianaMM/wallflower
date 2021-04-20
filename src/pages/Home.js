import React from "react";
import bannerImg from "../assets/images/event1.jpg";

export default function Home() {
  return (
    <div>
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>
      <div className="container py-5">
        <h1 className="text-center">
          Beautiful Flower Walls - Available to Hire
        </h1>
        <h4 className="text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.{" "}
        </h4>
      </div>
    </div>
  );
}
