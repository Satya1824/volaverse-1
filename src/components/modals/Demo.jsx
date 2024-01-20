import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Submitted from "./Submitted";
import Failed from "./Failed";
import axios from "axios";

const Demo = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    // setMessage("Hello");
    // setSubmitError(true);
    // onClose();
    if (!name) {
      setError1(true);
      return;
    }
    if (!companyName) {
      setError2(true);
      return;
    }
    if (!email) {
      setError3(true);
      return;
    }
    if (!interest) {
      setError4(true);
      return;
    }
    if (!description) {
      setError5(true);
      return;
    }

    setLoading(true);

    try {
      // console.log(name, companyName, email, interest, description);

      const res = await axios.post(
        "https://business.volaverse.com/backend/addData",
        {
          fullName: name,
          companyName: companyName,
          emailAddress: email,
          interest: interest,
          description: description,
        }
      );

      // console.log(res);

      if (res.data && res.data.status === "success") {
        setMessage(res.data.message);
        setSubmitted(true);
        setSubmitError(false);
        onClose();
        // console.log(res.data.message);
        setName("");
        setCompanyName("");
        setEmail("");
        setInterest("");
        setDescription("");
      } else {
        // console.log(res.data.message);
        setMessage(res.data.message);
        setSubmitted(false);
        setSubmitError(true);
      }
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setMessage(error);
      setSubmitted(false);
      setSubmitError(true);
    }
    setLoading(false);
  };

  const resetSubmitted = () => {
    setSubmitted(false);
    setSubmitError(false);
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      {/* modal */}
      <Modal
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
          px="30px"
          className="demo-cnt"
        >
          <ModalHeader>
            <Text
              textAlign="center"
              fontFamily="Montserrat"
              fontWeight="700"
              color="#3D3D3D"
              fontSize="2.1rem"
              letterSpacing="3px"
            >
              Get a Demo
            </Text>
            <Text
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize="11px"
              letterSpacing="1px"
            >
              Please fill the details to get customise immersive metaverse
              experience of your company
            </Text>
          </ModalHeader>
          <span className="modal-close-btn" onClick={onClose}>
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
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel className="form-labels">Full name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Full name"
                className="form-inputs"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError1(false);
                }}
                border={error1 ? "2px solid red" : "2px solid #745AC3"}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel className="form-labels">Company name</FormLabel>
              <Input
                placeholder="Company name"
                className="form-inputs"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  setError2(false);
                }}
                border={error2 ? "2px solid red" : "2px solid #745AC3"}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel className="form-labels">Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email address"
                className="form-inputs"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError3(false);
                }}
                border={error3 ? "2px solid red" : "2px solid #745AC3"}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel className="form-labels">Interest</FormLabel>
              <Select
                placeholder="Interest"
                className="form-inputs"
                value={interest}
                onChange={(e) => {
                  setInterest(e.target.value);
                  setError4(false);
                }}
                border={error4 ? "2px solid red" : "2px solid #745AC3"}
              >
                <option value="nfts">NFTs</option>
                <option value="cryptocurrency">Cryptocurrency</option>
                <option value="blockchain">Blockchain</option>
                <option value="metaverse">Metaverse</option>
              </Select>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel className="form-labels">Description</FormLabel>
              <Textarea
                placeholder="Give us a brief what you looking for..."
                className="form-inputs"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setError5(false);
                }}
                border={error5 ? "2px solid red" : "2px solid #745AC3"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <>
              <Button
                bg="#745AC3"
                color="#fff"
                px="20px"
                fontFamily="Montserrat"
                fontWeight="700"
                letterSpacing="1px"
                borderRadius="0.5rem"
                className="btn1"
                onClick={handleSubmit}
                isLoading={loading}
              >
                Submit
              </Button>
            </>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {submitted && (
        <Submitted message={message} resetSubmitted={resetSubmitted} />
      )}

      {submitError && (
        <Failed message={message} resetSubmitted={resetSubmitted} />
      )}
    </>
  );
};

export default Demo;
