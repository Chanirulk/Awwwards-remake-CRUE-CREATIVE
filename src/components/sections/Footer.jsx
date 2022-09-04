import React from 'react';
import styled from 'styled-components'; 
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import "./foot.css";
const SectionWrapper = styled.section`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black; 
  color:whitesmoke

  position: relative;
`;
const LogoContainer = styled.div`
  font-family: domaine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-family: domaine;
    font-size: 3em;
  }
`;
 const Bottom = styled.div`
 font-family: domaine;
 color: white;
 font-size:1em;
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <SectionWrapper>
      <LogoContainer>
        
        <h3 data-scroll data-scroll-speed="-1">
          Crue Creative
        </h3>
      </LogoContainer>
      
        <Bottom>
          <span className="credit"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved 2022
          </span> 
          <span className="link-ig"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Crafted by -
            <a
              href="https://www.instagram.com/chaniru.lk/"
              target="_blank"
              rel="noreferrer"
            >
              @chaniru.lk
            </a>
          </span>
        </Bottom> 
    </SectionWrapper>
  );
};

export default Footer;
