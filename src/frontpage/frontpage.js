import React, { useState } from "react";
import Navbar from "../frontpage/Navbar";
import Sidebar from "../frontpage/Sidebar";
import Footer from "../frontpage/Footer";
import HeroSection from "../frontpage/HeroSection";
import InfoSection from "../frontpage/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Frontpage;
