import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Demo from "./modals/Demo";

const PhoneLanding = () => {
  return (
    <Box>
      {/* 1st box */}
      <Box borderRadius="1.5rem" border="1px solid #A5A5A5" p="25px 7px">
        {/* main title  */}
        <Text
          textAlign="center"
          textTransform="uppercase"
          color="#3D3D3D"
          fontFamily="Azeret Mono"
          fontWeight="700"
          letterSpacing="2px"
          fontSize="1.8rem"
          lineHeight="81%"
          mb="15px"
        >
          Get your own metaverse scene
        </Text>

        {/* main description */}
        <Text
          textAlign="center"
          fontFamily="Montserrat"
          fontWeight="500"
          fontSize=".8rem"
          lineHeight="115%"
          mb="20px"
        >
          lorem This expedient serves to get an idea of the finished product
          that will soon be printed or disseminated via digital channels. lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Text>

        {/* buttons */}
        <Box display="flex" justifyContent="space-evenly">
          <Demo>
            <Button
              bg="#F6A1C0"
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="700"
              letterSpacing="1px"
              borderRadius=".5rem"
              className="btn5"
            >
              Get a Demo
            </Button>
          </Demo>
          <Button
            bg="#745AC3"
            color="#FFF"
            fontFamily="Montserrat"
            fontWeight="700"
            letterSpacing="1px"
            borderRadius=".5rem"
            className="btn6"
          >
            Schedule call
          </Button>
        </Box>
      </Box>

      <Box position="relative" mt="35px">
        {/* center purple patch  */}
        <Box
          h="100px"
          w="100px"
          bg="#745AC3"
          position="absolute"
          top="50%"
          left="50%"
          className="pl-pa"
        ></Box>

        <div className="grd">
          {/* img-1 */}
          <Box bg="#E5E9F2" p="4px" zIndex="20" borderRadius="1rem">
            <Box bg="#F6A1C0" borderRadius="1rem" className="cor-img-1">
              <Image loading="lazy" src="/images/img9.png" w="100%" />
            </Box>
          </Box>

          {/* img-2 */}
          <Box bg="#745AC3" p="4px" zIndex="20" borderRadius="1rem">
            <Image
              loading="lazy"
              zIndex="20"
              src="/images/img8.png"
              w="100%"
              h="100%"
              className="fade-in"
            />
          </Box>

          {/* img-3 */}
          <Box bg="#745AC3" p="4px" zIndex="20" borderRadius="1rem">
            <Image
              src="/images/img8.png"
              loading="lazy"
              w="100%"
              h="100%"
              zIndex="20"
              className="fade-in"
            />
          </Box>

          {/* img-4 */}
          <Box bg="#E5E9F2" p="4px" zIndex="20" borderRadius="1rem">
            <Image
              loading="lazy"
              borderRadius="1rem"
              src="/images/img10.png"
              w="100%"
              className="cor-img-2"
            />
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default PhoneLanding;
