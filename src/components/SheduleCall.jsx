import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const SheduleCall = () => {
  return (
    <Box
      bg="rgba(248, 152, 185, 0.90)"
      display="flex"
      p="60px 75px"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="2.5rem"
      mb="100px"
      className="sh-c"
    >
      <Box w="70%">
        <Text
          fontFamily="Montserrat"
          fontWeight="600"
          color="#3D3D3D"
          letterSpacing="3px"
          lineHeight="normal"
          fontSize="2rem"
          className="sh-txt"
        >
          What are you holding out for? Schedule meeting now!
        </Text>
      </Box>
      <Box textAlign="end" w="30%">
        <button className="btn4">Schedule call</button>
      </Box>
    </Box>
  );
};

export default SheduleCall;
