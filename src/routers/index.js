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

const Router = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/about-us" element={<About />}></Route>
        <Route index path="/contact-us" element={<Contactus />}></Route>
        <Route index path="/services" element={<Service />}></Route>
        <Route index path="/thank-you" element={<ThankYou />}></Route>

        <Route
          index
          path="/retrofit-led-power-saving-solutions"
          element={<Retrofit />}
        ></Route>

        <Route
          index
          path="/scrubber-and-ccs-commisioning"
          element={<Scrubber />}
        ></Route>
        <Route
          index
          path="/amp-solutions-and-vdf-retrofit"
          element={<Amp />}
        ></Route>
        <Route
          index
          path="project-supervision-shipbuilding-and-ship-repairs"
          element={<Projectsupervision />}
        ></Route>
        <Route
          index
          path="vessel-3d-scanning-and-production-design"
          element={<Vessels3d />}
        ></Route>
        <Route
          index
          path="/marine-electrical-&-automation"
          element={<MarineElectricalandAutomation />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
