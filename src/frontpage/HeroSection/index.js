import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Solana from "../../assets/img/frontpage/solana.svg";

import Video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH4,
  HeroP,
  HeroBottomTag,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroSmallIcon,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tokenize your future calender on blockchain</HeroH1>
        <HeroP>
          Sell your calender time slots for your services instantly No banking 
          integration needed. Sign up as a beta user and get 3 months free 
          trial
        </HeroP>
        <HeroBottomTag>
          <div>
            <HeroH4>Powered by:</HeroH4>
            <HeroSmallIcon src={Solana}/>
            <a href="https://solana.com/ignition">
              <HeroH4>Project at Ignition Hackathon 2021</HeroH4></a>
          </div>
          
        </HeroBottomTag>
        <HeroBtnWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
