import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import  "./loader.css";
const Container = styled(motion.div)`
  position: absolute;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: '100%',
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      
      <Text
      
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
       <p className='load-head'>Crue Creative</p><br />
       
      </Text>
      <Text
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <span className='small-text-load'>A Creative & Digital Studio Based in Sri Lanka</span>
    </Text>
    </Container>
  );
};

export default Loader;
