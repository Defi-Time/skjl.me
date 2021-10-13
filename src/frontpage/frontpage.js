import React, { useState } from "react";
import Navbar from "../frontpage/Navbar";
import Sidebar from "../frontpage/Sidebar";
import Footer from "../frontpage/Footer";
import HeroSection from "../frontpage/HeroSection";
import InfoSection from "../frontpage/InfoSection";
import {
  about,
  ananymous,
  freeCalendar,
  integrateable,
  openSource,
  signup,
} from "../frontpage/InfoSection/Data";
import Services from "../frontpage/Services";

function Frontpage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...about} />
      <InfoSection {...ananymous} />
      <InfoSection {...freeCalendar} />
      <InfoSection {...integrateable} />
      <InfoSection {...openSource} />
      <Services />
      <InfoSection {...signup} />
      <Footer />
    </>
  );
}

export default Frontpage;
