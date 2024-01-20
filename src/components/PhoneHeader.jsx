import { Box, Collapse, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const PhoneHeader = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isCross, setIsCross] = useState(false);

  const handleToggle = () => {
    onToggle();
    setIsCross(!isCross);
  };

  return (
    <>
      {/* bg */}
      <Box
        bg="#F6A1C0"
        borderBottomRadius="1.8rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="10px 20px"
        position="absolute"
        w="100%"
        className="ph-nav"
      >
        {/* logo */}
        <Box display="flex" gap="10px">
          <Image h="35px" src="/images/logo1.png" />
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            letterSpacing="2px"
            fontSize="1.8rem"
          >
            VOLAVERSE
          </Text>
        </Box>

        {/* toggle btn */}
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            onClick={handleToggle}
          >
            {/* Depending on the state, render different paths */}
            {isCross ? (
              <>
                <path
                  d="M2.01 0.343L0.343 2.01L12.989 14.657L14.656 12.99L2.01 0.343Z"
                  fill="#292D32"
                />
                <path
                  d="M0.343 12.989L2.01 14.656L14.656 2.01L12.989 0.343L0.343 12.989Z"
                  fill="#292D32"
                />
              </>
            ) : (
              <>
                <path
                  d="M11.6536 5.59143C13.0104 5.59143 14.1105 4.49146 14.1105 3.13458C14.1105 1.7777 13.0104 0.677734 11.6536 0.677734C10.2967 0.677734 9.19678 1.7777 9.19678 3.13458C9.19678 4.49146 10.2967 5.59143 11.6536 5.59143Z"
                  fill="#292D32"
                />
                <path
                  d="M2.45684 5.59143C3.81372 5.59143 4.91368 4.49146 4.91368 3.13458C4.91368 1.7777 3.81372 0.677734 2.45684 0.677734C1.09997 0.677734 0 1.7777 0 3.13458C0 4.49146 1.09997 5.59143 2.45684 5.59143Z"
                  fill="#292D32"
                />
                <path
                  d="M11.6536 15.8004C13.0104 15.8004 14.1105 14.7005 14.1105 13.3436C14.1105 11.9867 13.0104 10.8867 11.6536 10.8867C10.2967 10.8867 9.19678 11.9867 9.19678 13.3436C9.19678 14.7005 10.2967 15.8004 11.6536 15.8004Z"
                  fill="#292D32"
                />
                <path
                  d="M2.45684 15.8004C3.81372 15.8004 4.91368 14.7005 4.91368 13.3436C4.91368 11.9867 3.81372 10.8867 2.45684 10.8867C1.09997 10.8867 0 11.9867 0 13.3436C0 14.7005 1.09997 15.8004 2.45684 15.8004Z"
                  fill="#292D32"
                />
              </>
            )}
          </svg>
        </Box>
      </Box>

      {/* collapled div */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="20px 5px"
          color="white"
          mt="64px"
          bg="#745AC3"
          borderRadius="1.8rem"
          shadow="md"
          display="flex"
          justifyContent="space-around"
          className="small-header"
        >
          <HashLink to="/#about">about us</HashLink>
          <a href="#" target="_blank">
            schedule call
          </a>
        </Box>
      </Collapse>
    </>
  );
};

export default PhoneHeader;
