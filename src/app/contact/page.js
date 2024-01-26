"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };

const Contact = () => {
  const toast = useToast();

  const [state, setState] = useState(initState);

  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="text-center mb-12 pt-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          Contact Us
        </p>
      </div>

      {/* Contact Container */}
      <div className="mx-auto max-w-[1050px] px-4 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
        <div className="contact-form shadow-lg  group container rounded-md p-7 ">
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              errorBorderColor="red.300"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.message && !values.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              errorBorderColor="red.300"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <div className="text-center">
            {error && (
              <Text color="red.500" my={4} fontSize="lg">
                {error}
              </Text>
            )}
          </div>
          <div className="mx-auto text-center">
            <Button
              isDisabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              px={10}
              colorScheme="red"
              isLoading={isLoading}
              onClick={onSubmit}
            >
              Send
            </Button>
          </div>
        </div>
        <div className="contact-form shadow-lg  group container rounded-md flex flex-col gap-4 p-7">
          <h3 className="text-[#444444] text-xl font-semibold">Contact Info</h3>
          {/* <div className="flex gap-6">
            <div className="inline-block p-2 border-[2px] border-[#444444] rounded-md border-dashed">
              <img
                src="/assets/web.png"
                className="rounded h-[30px] "
                alt="website_icon"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-[#333663] font-semibold">Website</p>
              <p>https://chimkasimmatransportservices.vercel.app/</p>
            </div>
          </div> */}

          <div className="flex gap-6">
            <div className="inline-block p-2 border-[2px] border-[#444444] rounded-md border-dashed">
              <img
                src="/assets/phone.png"
                className="rounded h-[30px] "
                alt="phone_icon"
              />
            </div>

            <div className="flex flex-col">
              <h4 className="text-[#333663] font-semibold">Phone</h4>
              <p>+(234) 08066177724</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="inline-block p-2 border-[2px] border-[#444444] rounded-md border-dashed">
              <img
                src="/assets/email.png"
                className="rounded h-[30px] "
                alt="email_icon"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-[#333663] font-semibold">Email</p>
              <p>onye6ng@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d0e8d0] font-bold text-3xl text-center mx-auto p-10 mt-12 capitalize">
        JOURNEY EXCELLENCE UNLEASHED
      </div>
    </div>
  );
};

export default Contact;
