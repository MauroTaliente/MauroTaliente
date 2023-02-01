import React from "react";
import Hero from "../components/regular/sections/Hero";
import SimplePage from "../components/build/layouts/SimplePage";
import WarningWork from "../components/build/molecules/WarningWork";
import Projects from "../components/regular/sections/Projects";
import History from "../components/regular/sections/History";
import Contact from "../components/regular/sections/Contact";
import Footer from "../components/regular/sections/Footer";
import Elements from "../components/regular/sections/Elements";
import Stack from "../components/regular/sections/Stack";
// import Donut from "../components/regular/molecules/Donut";

const Main = () => {
  return (
    <SimplePage>
      <Elements>
        <WarningWork />
        <Hero />
        <Projects />
        <Stack />
        <History />
        <Contact />
        <Footer />
      </Elements>
    </SimplePage>
  );
};

export default Main;
