import React from "react";
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
  Input,
  useDisclosure
} from "@chakra-ui/react";
const ModalForm = () => {

  const { isOpen, onClose } = useDisclosure();
  return (

    <div>
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
              <FormLabel>Contact Information:</FormLabel>
              <Input
                placeholder="Contact Information:"
                type="number"
                name="contact"
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Departure Location:</FormLabel>
              <Input
                placeholder="Contact Information:"
                type="text"
                name="departure"
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel> Destination:</FormLabel>
              <Input placeholder="Destination" type="text" name="departure" />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel> Number of Passengers:</FormLabel>
              <Input
                placeholder="Number of Passengers:"
                type="number"
                name="passangers"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Additional Comments or Special Requests:</FormLabel>
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
  );
};

export default ModalForm;
