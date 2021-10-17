import React from "react";
// import CarouselSection from "./components/CarouselSection";
// import TeaSection from "./components/TeaSection";
import WallsSection from "./components/WallsSection";
import CooperFrame from "./components/CooperFrame";
import Rent from "./components/Rent";

export default function Home() {
  return (
    <div>
      <WallsSection />
      <CooperFrame />
      <Rent />
      {/* <TeaSection /> */}
      {/* <CarouselSection /> */}
    </div>
  );
}
