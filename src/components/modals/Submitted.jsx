import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const Submitted = ({ message, resetSubmitted }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      {/* modal */}
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="50px" />
        <ModalContent
          border="2.5px solid #3D3D3D"
          bg="#E5E9F2"
          borderRadius="1.5rem"
        >
          <span
            className="modal-close-btn"
            onClick={() => {
              onClose();
              resetSubmitted();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 83 83"
              fill="none"
            >
              <g clip-path="url(#clip0_1239_1959)">
                <path
                  d="M34.5822 48.4166L48.4154 34.5834M48.4154 48.4166L34.5822 34.5834M58.7903 58.7916C68.3007 49.2812 68.3007 33.7188 58.7903 24.2084C49.28 14.6981 33.7176 14.6981 24.2072 24.2084C14.6969 33.7188 14.6969 49.2812 24.2072 58.7916C33.7176 68.3019 49.28 68.3019 58.7903 58.7916Z"
                  stroke="#3D3D3D"
                  stroke-width="4.14991"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1239_1959">
                  <rect
                    width="58.6895"
                    height="58.6895"
                    fill="white"
                    transform="translate(0 41.5) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <ModalBody pb={6} textAlign="center">
            <Box display="flex" justifyContent="center" alignItems="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 246 246"
                fill="none"
              >
                <path
                  d="M122.558 0C55.0288 0 0 55.0288 0 122.558C0 190.088 55.0288 245.117 122.558 245.117C190.088 245.117 245.117 190.088 245.117 122.558C245.117 55.0288 190.088 0 122.558 0ZM181.141 94.37L111.651 163.861C109.935 165.576 107.606 166.557 105.155 166.557C102.704 166.557 100.375 165.576 98.6596 163.861L63.9755 129.177C60.4213 125.622 60.4213 119.74 63.9755 116.185C67.5297 112.631 73.4125 112.631 76.9667 116.185L105.155 144.374L168.15 81.3788C171.704 77.8246 177.587 77.8246 181.141 81.3788C184.696 84.933 184.696 90.6933 181.141 94.37Z"
                  fill="#5AAB53"
                />
              </svg>
            </Box>

            <Box>
              <Text
                color="#3D3D3D"
                fontFamily="Montserrat"
                fontWeight="700"
                fontSize="1.6rem"
                lineHeight="108%"
                my="20px"
              >
                Demo request received successfully
              </Text>
              <Text
                color="#3B3B3B"
                fontFamily="Montserrat"
                fontWeight="400"
                fontSize="0.7rem"
                lineHeight="120%"
              >
                {/* Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.Norem ipsum dolor sit amet,
                consectetur adipisc */}
                {message.message}
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Submitted;
