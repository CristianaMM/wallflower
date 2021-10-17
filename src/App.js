import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
// import Walls from "./pages/walls/Walls";
import WallItem from "./pages/walls/WallItem";
// import Tea from "./pages/tea/Tea";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/contactUs/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/walls" component={Walls} /> */}
        <Route exact path="/walls/:wallName" component={WallItem} />
        {/* <Route exact path="/you-me-tea" component={Tea} /> */}
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/faqs" component={FAQs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
