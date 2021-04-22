import React from "react";
import CarouselSection from "./components/CarouselSection";
import TeaSection from "./components/TeaSection";
import WallsSection from "./components/WallsSection";

export default function Home() {
  return (
    <div>
      <WallsSection />
      <TeaSection />
      <CarouselSection />
    </div>
  );
}
