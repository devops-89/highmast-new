import React from "react";
import Navbar from "../component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Footer from "../component/footer";
import About from "../views/about-us";
import Contactus from "../views/contact-us";
import EngineOverhauling from "../views/engine-overhauling";
import MarineElectricalandAutomation from "../views/marine-electrical-&-automation";
import CranesServices from "../views/cranesservices";
import MarineandOffshore from "../views/marine&offshore";
import DryDocking from "../views/hydraulic-power";
import Hydraulicpower from "../views/hydraulic-power";
import ScrollToTop from "../component/scrolltop";
import Services from "../component/services-section";
import Servicepage from "../views/services";
import ThankYou from "../views/thank-you";

const Router = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/about-us" element={<About />}></Route>
        <Route index path="/contact-us" element={<Contactus />}></Route>
        <Route index path="/services" element={<Servicepage />}></Route>
        <Route index path="/thank-you" element={<ThankYou/>}></Route>

        <Route
          index
          path="/engine-overhauling"
          element={<EngineOverhauling />}
        ></Route>
        <Route
          index
          path="/marine-electrical-&-automation"
          element={<MarineElectricalandAutomation />}
        ></Route>
        <Route
          index
          path="/cranes-services"
          element={<CranesServices />}
        ></Route>
        <Route
          index
          path="/marine-and-offshore"
          element={<MarineandOffshore />}
        ></Route>
        <Route
          index
          path="/hydraulic-power"
          element={<Hydraulicpower />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
