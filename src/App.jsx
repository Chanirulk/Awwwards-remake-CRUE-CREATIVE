import { ThemeProvider } from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Second from './components/sections/Second';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './components/sections/Banner';
import Third from './components/sections/Third';
import Footer from './components/sections/Footer';
import Loader from './components/Loader';

const App = () => {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
            {loaded ? null : <Loader />}
          </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main
              className="App"
              data-scroll-container
              ref={containerRef}
            >
              <Home />
              <About />
              <Second />
              <Banner />
              <Third />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
