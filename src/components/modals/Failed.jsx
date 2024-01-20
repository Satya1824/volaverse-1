import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const Failed = ({ message, resetSubmitted }) => {
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
              <Image src="/images/cross.png" h="50px" w="50px" />
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
                Demo request failed
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

export default Failed;
