import React from "react";
import Navbar from "../component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Footer from "../component/footer";
import About from "../views/about-us";
import Contactus from "../views/contact-us";
import EngineOverhauling from "../views/retrofit";
import MarineElectricalandAutomation from "../views/marine-electrical-&-automation";
import MarineandOffshore from "../views/alternatemarine";

import ScrollToTop from "../component/scrolltop";

import ThankYou from "../views/thank-you";
import Service from "../views/servicepage";
import Retrofit from "../views/retrofit";
import Scrubber from "../views/scrubber";
import Amp from "../views/alternatemarine";
import Projectsupervision from "../views/projectsupervision";
import Vessels3d from "../views/vessel3d";
import Privacypolicy from "../views/privacy-policy";
import TermsAndCondition from "../views/terms&condition";

const Router = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<Contactus />}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/thank-you" element={<ThankYou />}></Route>

        <Route
          path="/retrofit-led-power-saving-solutions"
          element={<Retrofit />}
        ></Route>

        <Route
          path="/scrubber-and-ccs-commisioning"
          element={<Scrubber />}
        ></Route>
        <Route path="/amp-solutions-and-vdf-retrofit" element={<Amp />}></Route>
        <Route
          path="/project-supervision-shipbuilding-and-ship-repairs"
          element={<Projectsupervision />}
        ></Route>
        <Route
          path="/vessel-3d-scanning-and-production-design"
          element={<Vessels3d />}
        ></Route>
        <Route
          path="/marine-electrical-&-automation"
          element={<MarineElectricalandAutomation />}
        ></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition />}
        ></Route>
        <Route path="/privacy-policy" element={<Privacypolicy />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
