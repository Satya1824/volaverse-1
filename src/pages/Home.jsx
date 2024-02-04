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
  const [loading, setLoading] = useState(true);

  const imagePaths = [
    "/images/logo1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/plus.png",
  ];

  const preloadImages = () => {
    const imagePromises = imagePaths.map((path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    return Promise.all(imagePromises);
  };

  useEffect(() => {
    jelly.register();
    Aos.init();
    window.scrollTo(0, 0);
    preloadImages().then(() => {
      setLoading(false);
    });
  }, []);

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
            <Services />
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
