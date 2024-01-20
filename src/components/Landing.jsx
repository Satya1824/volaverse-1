import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import Demo from "./modals/Demo";
import CircularText from "./CircularText";

const Landing = () => {
  // useEffect(() => {
  //   const text = document.querySelector(".c-text p");

  //   text.innerHTML = text.innerHTML
  //     .split("")
  //     .map((char, i) => `<span>${char}</span>`)
  //     .join("");
  // }, []);

  // useEffect(() => {
  //   const imageElements = document.querySelectorAll("img");

  //   const handleImageLoad = () => {
  //     const allImagesLoaded = Array.from(imageElements).every(
  //       (img) => img.complete && img.naturalHeight !== 0
  //     );
  //     console.log(allImagesLoaded);

  //     if (allImagesLoaded) {
  //       onImagesLoaded(true);
  //     } else {
  //       onImagesLoaded(false);
  //     }
  //   };

  //   imageElements.forEach((img) => {
  //     img.addEventListener("load", handleImageLoad);
  //   });

  //   return () => {
  //     imageElements.forEach((img) => {
  //       img.removeEventListener("load", handleImageLoad);
  //     });
  //   };
  // }, [onImagesLoaded]);

  const handleHover = (e) => {
    const elements = document.querySelectorAll(".blur");
    elements.forEach((el) => {
      if (el !== e.target) {
        el.classList.add("blur-filter");
      } else {
        el.classList.remove("blur-filter");
      }
    });
  };

  const handleLeave = () => {
    const elements = document.querySelectorAll(".blur");
    elements.forEach((el) => {
      el.classList.remove("blur-filter");
    });
  };

  return (
    <>
      {/* large-view  */}
      <Box minHeight="100vh" w="100%" className="pc">
        <Box position="absolute" display="flex">
          <Box
            bg="#E5E9F2"
            w="100px"
            h="100px"
            position="absolute"
            top="95.5px"
            right="94px"
            zIndex="2"
            borderTopRightRadius="2.5rem"
          ></Box>
          <Box
            bg="#F6A1C0"
            w="100px"
            h="100px"
            position="absolute"
            right="50px"
            top="50px"
          ></Box>
          <Box
            bg="#F6A1C0"
            h="95.5px"
            top="0"
            p="20px 20px"
            borderBottomLeftRadius="2.5rem"
            zIndex="10"
          >
            <Box display="flex" alignItems="center" gap="15px">
              <Box w="41.81px">
                <Image h="2.5rem" src="/images/logo1.png" />
              </Box>
              <Text
                color="#3B3B3B"
                fontSize="2.1rem"
                fontFamily="Bebas Neue"
                fontWeight="400"
                letterSpacing="6.4px"
                mt="5px"
              >
                VOLAVERSE
              </Text>
            </Box>
          </Box>
          <Box
            bg="#E5E9F2"
            borderBottomLeftRadius="2.5rem"
            h="115px"
            w="100px"
            zIndex="2"
          ></Box>
        </Box>
        <Box
          position="absolute"
          top="115px"
          h="500px"
          w="500px"
          zIndex="3"
          display="flex"
        >
          {/* main left img */}
          <div className="img-1 main-left-img"></div>
          <Box
            bg="#F6A1C0"
            h="190px"
            w="210px"
            borderBottomRadius="2.5rem"
            borderTopRightRadius="2.5rem"
            ml="24px"
            overflow="hidden"
          >
            {/* vr box img  */}
            <div className="floating">
              <Image src="/images/img2.png" className="vr-img" />
            </div>

            {/* vr box shadow */}
            <Box display="flex" justifyContent="center" mt="-13px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="35"
                viewBox="0 0 228 35"
                fill="none"
                className="shadow"
              >
                <g filter="url(#filter0_f_1245_1105)">
                  <ellipse
                    cx="114"
                    cy="17.5"
                    rx="102"
                    ry="5.5"
                    fill="#E66793"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1245_1105"
                    x="0"
                    y="0"
                    width="228"
                    height="35"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="6"
                      result="effect1_foregroundBlur_1245_1105"
                    />
                  </filter>
                </defs>
              </svg>
            </Box>
          </Box>
        </Box>

        {/* nav-links */}
        <Box
          display="flex"
          justifyContent="end"
          gap="50px"
          className="head-links"
          pt="45px"
          pb="55px"
        >
          <HashLink
            to="/#about"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="blur"
          >
            about us
          </HashLink>
          <a
            href="#"
            target="_blank"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="blur"
          >
            schedule call
          </a>
        </Box>

        {/* main right section  */}
        <Box display="flex">
          <Box minWidth="505px"></Box>
          <Box
            border="1.5px solid #A5A5A5"
            borderRadius="2.5rem"
            p="25px 20px"
            zIndex="10"
            h="371px"
            className="main-r8"
          >
            <Text
              color="#3D3D3D"
              textTransform="uppercase"
              fontFamily="Azeret Mono"
              fontWeight="700"
              lineHeight="86%"
              mb="20px"
              className="main-txt"
            >
              Get your own metaverse scene
            </Text>
            <Text
              color="#000"
              fontFamily="Montserrat"
              fontWeight="500"
              mb="30px"
              lineHeight="131%"
              className="main-p"
            >
              lorem This expedient serves to get an idea of the finished product
              that will soon be printed or disseminated via digital channels.
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum
              lorem ipsum lorem
            </Text>
            <Demo>
              <Button
                className="btn2"
                color="#3D3D3D"
                fontFamily="Montserrat"
                fontWeight="700"
                letterSpacing="1.5px"
              >
                Get a Demo
              </Button>
            </Demo>
            <Button
              color="#FFF"
              className="btn3"
              fontFamily="Montserrat"
              fontWeight="700"
              letterSpacing="1.5px"
            >
              Schedule call
            </Button>
          </Box>
        </Box>

        {/* main bottom section */}
        <Box mt="-60px" bottom="100px" h="400px" w="505px" position="relative">
          {/* img-3 div */}
          <Box
            h="170px"
            w="210px"
            bg="#745AC3"
            borderRadius="2.5rem"
            position="absolute"
            right="21px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              zIndex="2"
              h="155px"
              src="/images/img3.png"
              className="fade-in"
            />
          </Box>

          {/* purple patch 1 */}
          <Box
            bg="#745AC3"
            w="100px"
            h="100px"
            position="absolute"
            right="180px"
            top="120px"
          ></Box>

          {/* left curve */}
          <Box
            bg="#E5E9F2"
            w="100px"
            h="100px"
            position="absolute"
            top="82px"
            right="231px"
            zIndex="2"
            borderBottomRightRadius="2.5rem"
          ></Box>
          <Box
            bg="#E5E9F2"
            w="100px"
            h="100px"
            position="absolute"
            top="170px"
            right="150px"
            zIndex="2"
            borderTopLeftRadius="2.5rem"
          ></Box>

          {/* purple patch 2 */}
          <Box
            bg="#745AC3"
            w="100px"
            h="100px"
            position="absolute"
            right="-28px"
            top="120px"
          ></Box>

          {/* right curve */}
          <Box
            bg="#E5E9F2"
            w="100px"
            h="100px"
            position="absolute"
            top="82px"
            right="-79px"
            zIndex="2"
            borderBottomLeftRadius="2.5rem"
          ></Box>
          <Box
            bg="#E5E9F2"
            w="100px"
            h="100px"
            position="absolute"
            top="170px"
            right="0px"
            zIndex="2"
            borderTopRightRadius="2.5rem"
          ></Box>

          {/* img-4 div */}
          <Box
            bg="#745AC3"
            w="255px"
            position="absolute"
            top="182px"
            borderLeftRadius="2.5rem"
            borderBottomRightRadius="2.5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="10px"
          >
            <Image h="225px" src="/images/img4.png" className="fade-in" />
          </Box>

          {/* circular text */}

          <Box
            bg="#BAACE1"
            position="absolute"
            bottom="-15px"
            right="15px"
            h="220px"
            w="220px"
            borderRadius="50%"
            zIndex="10"
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="c-txt-cnt"
          >
            <div className="c-text">
              <p>
                {/* •Solve your problem in metaverse •Get your metaverse solutions */}
                <CircularText />
              </p>
            </div>
            <Image src="/images/plus.png" h="80px" w="80px" />
          </Box>
        </Box>
        <Box display="flex" mt="-319px">
          <Box minW="504.5px"></Box>
          <Box
            bg="#745AC3"
            borderRightRadius="2.5rem"
            borderBottomLeftRadius="2.5rem"
            p="10px"
            zIndex="10"
            w="100%"
          >
            <Image
              borderRadius="2.5rem"
              w="100%"
              h="225px"
              src="/images/img5.png"
              className="fade-in"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
