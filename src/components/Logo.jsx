import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imga from "../assets/img/f1.png";
const Container = styled.div`
`;

const TextWrapper = styled(motion.span)`

.bar-nav{
  position:absolute;
  z-index:99;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 20px;
  position: fixed;
  left: 5px;
  top: 10px;
  width: 99%;
}

li {
  float: right;
}
li a:hover{
  color: rgb(187, 161, 122);

}
li a {
  font-family: 'Albert Sans', sans-serif;
  display: block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

li a:hover:after{

  transform: scaleX(1);
  transform-origin: bottom left;
}



.logo-av{
  position:absolute;
  top: -57.5px;
  left: 5px;
  height: 160px;
  width: 160px;
  
}

`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 2,
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
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
         
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
      <div className='bar-nav'>
        <ul>
         <img className="logo-av" src={imga} alt="" />
        <li><a href="https://www.instagram.com/chaniru.lk/">About</a></li>
        <li><a href="https://www.instagram.com/chaniru.lk/">Contact</a></li>
        <li><a href="https://www.instagram.com/chaniru.lk/">News</a></li>
        <li><a class="active" href="https://www.instagram.com/chaniru.lk/">Home</a></li>
          
          
          
        </ul>
      </div>

        </TextWrapper>
      </Link>
    </Container>
  );
};

export default Logo;
