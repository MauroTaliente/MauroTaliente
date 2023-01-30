import React from "react";
import Hero from "../components/regular/organisms/Hero";
import SimplePage from "../components/build/layouts/SimplePage";
import Donut from "../components/regular/molecules/Donut";
import Projects from "../components/regular/organisms/Projects";
import WarningWork from "../components/build/molecules/WarningWork";

const Main = () => {
  return (
    <SimplePage>
      <WarningWork />
      <Hero />
      <Projects />
    </SimplePage>
  );
};

export default Main;
