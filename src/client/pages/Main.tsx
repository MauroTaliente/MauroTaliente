import React from "react";
import Hero from "../components/regular/sections/Hero";
import SimplePage from "../components/build/layouts/SimplePage";
import WarningWork from "../components/build/molecules/WarningWork";
import Projects from "../components/regular/sections/Projects";
import History from "../components/regular/sections/History";
import Contact from "../components/regular/sections/Contact";
import Footer from "../components/regular/sections/Footer";
// import Donut from "../components/regular/molecules/Donut";

const Main = () => {
  return (
    <SimplePage>
      <WarningWork />
      <Hero />
      <Projects />
      <History />
      <Contact />
      <Footer />
    </SimplePage>
  );
};

export default Main;
