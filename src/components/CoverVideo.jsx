import styled from 'styled-components';
import Video from '../assets/video.mp4';
import { motion } from 'framer-motion';
import "./cover.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const OverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;
  background-color: ${(props) =>
    `rgba(${props.theme.bodyRgba}, 0.7)`};
`;

const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 47%;
  left: 1%;
  z-index: 8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
  }
  
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <SectionWrapper>
      <OverLay />
      <TitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".12"
            data-scroll-speed="2"
          >
            <p className="cover-head-vid">Crue Creative</p>
          </motion.h1>
        </div>
       
      </TitleWrapper>
      <video src={Video} type="video/mp4" autoPlay muted loop />
    </SectionWrapper>
  );
};

export default CoverVideo;
