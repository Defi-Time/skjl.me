import React from 'react';
import Icon1 from "../../assets/img/frontpage/share.svg";
import Icon2 from "../../assets/img/frontpage/blockchain.svg";
import Icon3 from "../../assets/img/frontpage/payme.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements"; 

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Calender Share</ServicesH2>
          <ServicesP>
            Share your calender with friends, family or clients who want to book time slot with you.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Onchain or Ofchain </ServicesH2>
          <ServicesP>
            Switch between use of Blockchain protocol or traditional system for easy transition.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Payment Integrations</ServicesH2>
          <ServicesP>
            Use for free with friends and family. Or get paid instantly in crypto token for your booked time slot or traditional payment services.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
