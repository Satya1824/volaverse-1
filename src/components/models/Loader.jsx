import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { Box } from "@chakra-ui/react";

const Loader = ({ color }) => {
  const { progress } = useProgress();
  return (
    <Html as="div">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="10dvw"
        h="5px"
        backgroundColor="white"
        overflow="hidden"
        borderRadius="1rem"
      >
        <Box w={`${progress}%`} h="5px" backgroundColor={color}></Box>
      </Box>
    </Html>
  );
};

export default Loader;
