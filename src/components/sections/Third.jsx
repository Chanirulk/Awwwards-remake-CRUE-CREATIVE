import styled from 'styled-components'; 
import "./new.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #000000;
  display: flex;
  margin: 0 auto;
  color: white;
  font-family: 'Albert Sans', sans-serif;

`;

const TextWrapper = styled.div`
  z-index: 10;
`;

const LeftContainer = styled.div`
  width: 100%;
  text-align:center;
  top: 40%;
  left:50%
  font-size:1.5em;
  position: absolute;
  text-transform:uppercase;
  z-index: 10;
`;

const Home = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      

      <LeftContainer
        data-scroll
        data-scroll-sticky
        data-croll-direction="#fixed-target"
      >
     <p className="end-tezxt"
        data-scroll data-scroll-speed="-2">
          Cure creative is a digital agecny based in Sri Lanka <br />
          our aim is to win awwwards as being part of its community <br />
          Not just awwwards to, we won't to provide our customers with <br />
          the best digital experience they could ever imagine of.
      </p> 
      </LeftContainer>
       
      <TextWrapper >
        <p className="header-sl-new"
        data-scroll data-scroll-speed="-2">WORK WITH US</p> 
      </TextWrapper>
    </SectionWrapper>
  );
};

export default Home;
