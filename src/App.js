import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Walls from "./pages/Walls";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/walls" component={Walls} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={ContactUs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
