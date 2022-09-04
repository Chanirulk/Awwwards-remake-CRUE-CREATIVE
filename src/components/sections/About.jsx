import styled from 'styled-components';
import "./about.css";
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

const TitleWrapper = styled.span`
  position: absolute;
  top: 50%;
  z-index: 10;
  font-family: domaine;
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
const RightContainer = styled.div`
  width: 35%;
  position: relative;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 2%;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 80%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

`;

const Home = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      

      <LeftContainer
        data-scroll
        data-scroll-sticky
        data-croll-direction="#fixed-target"
      >
       "Creative and ingenious, Crue Creative LK <br />
       has a way of making a simple idea/brand <br />
       come to full bloom"
       <br />
       <span className='small-left'> - a crue creative statement</span>
      </LeftContainer>
       
      <TextWrapper >
        <p className="header-sl"
        data-scroll data-scroll-speed="-2">born in sri lanka</p> 
      </TextWrapper>
    </SectionWrapper>
  );
};

export default Home;
