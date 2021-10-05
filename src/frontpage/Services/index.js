import React from 'react';
import Icon1 from '../../images/share.svg';
import Icon2 from '../../images/blockchain.svg';
import Icon3 from '../../images/payme.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Calender Share</ServicesH2>
          <ServicesP>
            Share your calender with clients who want to book your services.
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
            Get paid instantly in crypto token for your booked time slot or traditional payment services.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
