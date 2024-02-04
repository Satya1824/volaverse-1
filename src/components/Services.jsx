import { Box, Image, Text, Progress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ModelViewer from "./models/Model1";
import servicesData from "../data/services/data";

const Services = () => {
  return (
    <Box mb="150px" className="s-mb">
      {/* {loading ? <>loading</> : null} */}
      {/* heading */}
      <Text
        color="#3D3D3D"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        letterSpacing="4px"
        fontSize="3rem"
        mb={{ base: "10px", md: "20px" }}
        className="se-txt"
        textTransform="uppercase"
        textAlign="center"
      >
        Our Services
      </Text>

      {/* even data => 0, 2, 4, 6 ......  */}

      {servicesData.map((data, index) => (
        <>
          {index % 2 === 0 ? (
            <Box key={data.title}>
              {/* title bg */}
              <Box
                bg="#F899BB"
                p="20px 25px 17px 25px"
                borderRadius="1.3rem"
                display="inline-block"
                position="relative"
                className="txt-cnt br-1"
                minW="216.12px"
              >
                {/* title  */}
                <Text
                  fontFamily="Bebas Neue"
                  fontWeight="400"
                  color="#FFF"
                  fontSize="2rem"
                  textTransform="uppercase"
                  letterSpacing="2px"
                  className="se-s-txt"
                  textAlign="center"
                >
                  {data.title}
                </Text>
                <Box
                  h="90px"
                  w="90px"
                  bg="#F899BB"
                  bottom="-60px"
                  right="-55px"
                  position="absolute"
                  className="sa-1"
                ></Box>

                {/* bg curve-1 */}
                <Box
                  bg="#E5E9F2"
                  h="70px"
                  w="60px"
                  borderBottomLeftRadius="1.3rem"
                  position="absolute"
                  top="0"
                  right="-59px"
                  className="sb-1"
                ></Box>

                {/* bg curve-2 */}
                <Box
                  bg="#E5E9F2"
                  h="70px"
                  w="60px"
                  borderTopRightRadius="1.3rem"
                  position="absolute"
                  bottom="-70px"
                  right="15px"
                  className="sb-2"
                ></Box>
              </Box>

              {/* 3d model / image */}
              <Box
                display="flex"
                justifyContent="space-between"
                mt="-15px"
                className="m-cnt"
              >
                <Box minW="201px" className="m-g pc" pt="50px" zIndex="20">
                  {/* body text for large screen  */}
                  <Text
                    w="201px"
                    pe="10px"
                    color="#3D3D3D"
                    fontFamily="Montserrat"
                    fontWeight="400"
                    fontSize=".9rem"
                  >
                    {data.body}
                  </Text>
                </Box>
                <Box
                  zIndex="20"
                  bg="#F899BB"
                  w="100%"
                  borderRightRadius="1.5rem"
                  borderBottomLeftRadius="1.5rem"
                  p="10px"
                  className="mp br-2"
                >
                  {data.is_3dModel ? (
                    <Box
                      bg="#E5E9F2"
                      h="100%"
                      borderRadius="1.5rem"
                      overflow="hidden"
                    >
                      <ModelViewer data={data} color={"#F899BB"} />
                    </Box>
                  ) : (
                    <Image
                      className="m-img"
                      w="100%"
                      borderRadius="1.5rem"
                      src={data.media_path}
                    />
                  )}
                </Box>
              </Box>

              {/* body text for small screen */}
              <Text
                color="#3D3D3D"
                fontFamily="Montserrat"
                fontWeight="400"
                fontSize=".9rem"
                className="ph"
                mt="10px"
                mb="40px"
                zIndex="20"
              >
                {data.body}
              </Text>
            </Box>
          ) : (
            <>
              {/* even data => 0, 2, 4, 6 ......  */}
              <Box textAlign="end" my="40px" className="s-mt" key={data.title}>
                <Box
                  bg="#745AC3"
                  p="20px 25px 17px 25px"
                  borderRadius="1.3rem"
                  display="inline-block"
                  position="relative"
                  className="txt-cnt br-3"
                  minW="216.12px"
                >
                  {/* title */}
                  <Text
                    fontFamily="Bebas Neue"
                    fontWeight="400"
                    color="#FFF"
                    fontSize="2rem"
                    textTransform="uppercase"
                    letterSpacing="2px"
                    className="se-s-txt"
                    textAlign="center"
                  >
                    {data.title}
                  </Text>
                  <Box
                    h="90px"
                    w="90px"
                    bg="#745AC3"
                    bottom="-60px"
                    left="-55px"
                    position="absolute"
                    className="sa-1"
                  ></Box>

                  <Box
                    bg="#E5E9F2"
                    h="70px"
                    w="60px"
                    borderBottomRightRadius="1.3rem"
                    position="absolute"
                    top="0"
                    left="-59px"
                    className="sb-3"
                  ></Box>
                  <Box
                    bg="#E5E9F2"
                    h="70px"
                    w="60px"
                    borderTopLeftRadius="1.3rem"
                    position="absolute"
                    bottom="-70px"
                    left="15px"
                    className="sb-4"
                  ></Box>
                </Box>

                {/* 3d model / image */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt="-15px"
                  className="m-cnt"
                >
                  <Box
                    zIndex="20"
                    bg="#745AC3"
                    borderLeftRadius="1.5rem"
                    borderBottomRightRadius="1.5rem"
                    p="10px"
                    w="100%"
                    className="mp br-4"
                  >
                    {data.is_3dModel ? (
                      <Box
                        bg="#E5E9F2"
                        h="100%"
                        borderRadius="1.5rem"
                        overflow="hidden"
                      >
                        <ModelViewer data={data} color={"#745AC3"} />
                      </Box>
                    ) : (
                      <Image
                        className="m-img"
                        w="100%"
                        borderRadius="1.5rem"
                        src={data.media_path}
                      />
                    )}
                  </Box>
                  <Box minW="201px" className="m-g pc" pt="50px" zIndex="20">
                    {/* body text for large screen */}
                    <Text
                      w="201px"
                      ps="10px"
                      textAlign="start"
                      color="#3D3D3D"
                      fontFamily="Montserrat"
                      fontWeight="400"
                      fontSize=".9rem"
                      className="pc"
                    >
                      {data.body}
                    </Text>
                  </Box>
                </Box>

                {/* body text for small screen */}
                <Text
                  color="#3D3D3D"
                  fontFamily="Montserrat"
                  fontWeight="400"
                  fontSize=".9rem"
                  className="ph"
                  textAlign="start"
                  mt="10px"
                >
                  {data.body}
                </Text>
              </Box>
            </>
          )}
        </>
      ))}
    </Box>
  );
};

export default Services;
