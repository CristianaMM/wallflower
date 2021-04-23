import React from "react";
import FirstSection from "./components/FirstTeaSection";
import BoxContent from "./components/BoxContent";
import ImagesDisplay from "./components/ImagesDisplay";
import BoxBuy from "./components/BoxBuy";
import ScrollToTop from "../../components/ScrollToTop";

export default function Tea() {
  return (
    <>
      <ScrollToTop />
      <div className="youMeTea container mb-5">
        <div className="row text-center align-items-center justify-content-center">
          <FirstSection />
          <BoxContent />
        </div>
      </div>

      <ImagesDisplay />
      <BoxBuy />
    </>
  );
}
