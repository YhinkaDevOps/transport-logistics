"use client";
import React from "react";
import ModalForm from "../../components/Modal"
import {
  Textarea,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const Terminal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef(null);

  return (
    <div className="min-h-screen bg-[#f4f5f7] px-2 md:px-0 py-16">
      <div className="text-center mb-12 pt-24 ">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          Bus Terminals
        </p>
      </div>

      {/* Aba Terminal  */}
      <div className="border-animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9456829141236!2d7.371445!3d5.112457399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429947b8195601%3A0x82f1b7c2fbf35653!2s2%20Milverton%20Rd%2C%20Aba%2C%20450101%2C%20Abia!5e0!3m2!1sen!2sng!4v1705232983315!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="aba-bg content-div bg-[#91add3] shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5 flex flex-col gap-2 ">
          <div className="hover:opacity-100">
            <h4 className="font-bold text-2xl text-white">Abia Terminal</h4>
            <div className=" text-white">No 2 Milverton Aba, Abia State</div>
            <Button onClick={onOpen} mt={4}>
              Book Now
            </Button>
          </div>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Booking Form</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl isRequired>
                  <FormLabel>Full Name:</FormLabel>
                  <Input placeholder="Full name" type="text" name="name" />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Contact Number:</FormLabel>
                  <Input
                    placeholder="Contact Mumber"
                    type="number"
                    name="contact"
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel>Departure Location:</FormLabel>
                  <Input
                    placeholder="Departure Location"
                    type="text"
                    name="departure"
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel> Destination:</FormLabel>
                  <Input
                    placeholder="Destination"
                    type="text"
                    name="departure"
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <FormLabel> Number of Passengers:</FormLabel>
                  <Input
                    placeholder="Number of Passengers"
                    type="number"
                    name="passangers"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>
                    Additional Comments or Special Requests:
                  </FormLabel>
                  <Textarea
                    type="text"
                    name="comments"
                    rows={4}
                    placeholder="Comments"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" mr={5}>
                  Submit Booking
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>

      {/* Lagos Terminal */}
      <div className="animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-5 md:mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.29857279163!2d3.299496311291875!3d6.462894645359911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b899fd586f543%3A0x50db5915de1d275e!2sTransport%20Company%20Of%20Anambra%20State%20Ltd.%20(TRACAS)!5e0!3m2!1sen!2sng!4v1705237797468!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="festac-bg content-div bg-[#91add3] shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5 flex flex-col gap-2 ">
          <div className="hover:opacity-100">
            <h4 className="font-bold text-2xl text-white">Lagos Terminal</h4>
            <div className="font-semibold text-white">
              1st Avenue Festac, beside Tracas Festac Town, Lagos State
            </div>
            <Button onClick={onOpen} mt={4}>
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Abuja Terminal */}
      <div className="animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-5 md:mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.9877705386!2d7.438345349759049!3d9.065992450270045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cfd8e4fb2e13%3A0xdaeb920ed74f07a8!2sI-Mirror%20Global%20Consult!5e0!3m2!1sen!2sng!4v1705798426777!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="abuja-bg content-div bg-[#91add3] shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5  flex flex-col gap-2 ">
          <div className="hover:opacity-100">
            <h4 className="font-bold text-2xl text-white">Abuja Terminal</h4>
            <div className="font-semibold text-white">
              Plot 1127 A.E Ekukinam street, Utako, Abuja
            </div>
            <Button onClick={onOpen} mt={4}>
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Enugu Terminal */}
      <div className="animate__animated animate__fadeInLeft md:border-t md:border-b border-black mt-5 md:mt-10 mx-auto max-w-[900px] w-full grid sm:grid-cols-2 gap-2 p-1 md:p-4 text-white">
        <div className="hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.672867952885!2d7.487921474992175!3d6.436046193555127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a17d1a08ca13%3A0xc26b371941d53399!2s7%20Market%20Rd%2C%20Ogui%2C%20Enugu%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1705799959234!5m2!1sen!2sng"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="enugu-bg content-div bg-[#91add3] shadow-lg shadow-[#040c16] rounded-md p-20 md:p-5 flex flex-col gap-2 ">
          <div className="hover:opacity-100">
            <h4 className="font-bold text-2xl text-white">Enugu Terminal</h4>
            <div className="font-semibold text-white">
              No. 7, market road, Mgbemena park ogui, Enugu
            </div>
            <Button onClick={onOpen} mt={4}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
