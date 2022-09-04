import styled from 'styled-components';
import "./second.css";
import img01 from '../../assets/img/1.png';
import img02 from '../../assets/img/2.png';
import img03 from '../../assets/img/3.png';
import img04 from '../../assets/img/41.png';
import img05 from '../../assets/img/5.png';
import img06 from '../../assets/img/6.png';
import img09 from '../../assets/img/9.png';
const SectionWrapper = styled.section`
  min-height: 150vh;
  width: 100%;
  position: relative;
  background-color: #000000;
  display: flex;
  margin: 0 auto;
  color: white;
  font-family: 'Albert Sans', sans-serif;
`;

const TextWrapper = styled.div`
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftContainer = styled.div`
  z-index: 10;
  overflow: hidden;
  width:1000px;
   
`;

const Home = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      <LeftContainer
        data-scroll
   
      >
      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-one"
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-2">Caron</a>
      <img className="prod-one" src={img01} alt=""  
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-3" />

      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-two"
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-2">Amana</a>
      <img className="prod-two" src={img02} alt=""  
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-3" />

      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-three"
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-2">TwentySix</a>
      <img className="prod-three" src={img03} alt=""  
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-3" />

      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-four"
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-2">PARADIS</a>
      <img className="prod-four" src={img04} alt=""  
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-3" />

      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-five"
      data-scroll  
      data-scroll-delay=".10"
      data-scroll-speed="-1">NUTMEG.GINGER</a>
      <img className="prod-five" src={img05} alt=""  
      data-scroll  
      data-scroll-delay=".10"
      data-scroll-speed="-2" />

      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-six"
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-1">Aymddesigns</a>
      <img className="prod-six" src={img06} alt=""  
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-3" />

      <a href='https://www.instagram.com/chaniru.lk/' className="prod-text-seven"
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-2">Agnes</a>
      <img className="prod-seven" src={img09} alt=""  
      data-scroll  
      data-scroll-delay=".12"
      data-scroll-speed="-3" />
      </LeftContainer>
       
      <TextWrapper >
      <span className="acros-left" data-scroll>
       MAKE A GLOBAL IMPACT <br />
      ACROSS DIFFERENT VERTICLES
      </span>
      </TextWrapper>
    </SectionWrapper>
    
  );
};

export default Home;
