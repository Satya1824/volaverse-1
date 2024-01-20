import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SheduleCall from "../components/SheduleCall";
import Services from "../components/Services";
import { Box, Progress } from "@chakra-ui/react";
import About from "../components/About";
import Landing from "../components/Landing";
import PhoneLanding from "../components/PhoneLanding";
import PhoneHeader from "../components/PhoneHeader";
import Aos from "aos";
import "aos/dist/aos.css";
import { jelly } from "ldrs";

const Home = () => {
  const [loading, setLoading] = useState(false);
  // const [progressValue, setProgressValue] = useState(0);

  const handleModelLoad = () => {
    // setProgressValue((prevValue) => Math.min(prevValue + 20, 100));
    // setProgressValue(100);
    setLoading(false);
  };

  useEffect(() => {
    jelly.register();
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // console.log(loading);
  }, [loading]);

  const servicesComponent = <Services handleModelLoad={handleModelLoad} />;

  // console.log(loading);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100vh"
          bg="#E5E9F2"
        >
          <Box position="fixed">
            <l-jelly size="50" speed="1" color="#745AC3"></l-jelly>
            {/* <Box>
              <Progress size="lg" isIndeterminate />
            </Box> */}
          </Box>
          <Box position="absolute" left="-10000px">
            {servicesComponent}
          </Box>
        </Box>
      ) : (
        <Box bg="#E5E9F2">
          <Box px="100px" className="pd">
            <Landing />
            {/* <Progress value={progressValue} size="xs" colorScheme="pink" /> */}
          </Box>

          {/* small devices header */}

          <Box className="ph">
            <PhoneHeader />
          </Box>

          {/* small-view */}
          <Box className="ph" px="10px" pt="120px" mb="100px">
            <PhoneLanding />
          </Box>

          {/* about */}
          <Box id="about" px="100px" mb="65px" pt="50px" className="pd">
            <About />
          </Box>

          {/* services */}
          <Box px="100px" className="pd">
            <Services handleModelLoad={handleModelLoad} />
          </Box>

          {/* schedule call */}

          <Box px="100px" className="pd">
            <SheduleCall />
          </Box>

          {/* footer */}
          <Box data-aos="fade-up" data-aos-duration="1000">
            <Footer />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;
