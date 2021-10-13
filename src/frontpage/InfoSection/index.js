import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  buttonLink,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={buttonLink}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

InfoSection.defaultProps = {
  id: 1,
}

InfoSection.propTypes = {
  id: PropTypes.bool,
  lightBg: PropTypes.bool,
  lightText: PropTypes.bool,
  imgStart: PropTypes.bool,
  topLine: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  primary: PropTypes.bool,
  darkText: PropTypes.bool,
  dark: PropTypes.bool,
  dark2: PropTypes.bool,
}
export default InfoSection;
