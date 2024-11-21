import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  position,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

function ContactPage() {
  return (
    <>
      <Box className="contact">
        <Navbar />
        <Box className="container">
          <Heading {...css.title}>Contact Us</Heading>
        </Box>
      </Box>
      <Box p={"48px 0"} className="container">
        <Flex align={'center'} justifyContent={"space-between"}>
          <Box>
            <Heading {...css.name}>Get in Touch With Us</Heading>
            <Flex m={"12px 0"} gap={"12px"}>
              <Input {...css.input} placeholder="FullName" type="text" />
              <Input {...css.input} placeholder="Email" type="email" />
            </Flex>
            <Flex m={"12px 0"} gap={"12px"}>
              <Input {...css.input} placeholder="Phone" type="tell" />
              <Input {...css.input} placeholder="Company" type="text" />
            </Flex>
            <Flex m={"12px 0"} gap={"12px"}>
              <Input {...css.input} placeholder="Phone" type="tell" />
              <Input {...css.input} placeholder="Company" type="text" />
            </Flex>
            <Textarea placeholder="Message" {...css.message} />
            <Button type="submit" {...css.button}>
              Send Message
            </Button>
          </Box>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.358490222487!2d69.17986998518067!3d41.28515389500681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8980da899b57%3A0xf96b53f14dac6e55!2sFarkhad%20Bazaar!5e0!3m2!1sen!2s!4v1731828545864!5m2!1sen!2s"
              style={{ border: 0 }}
              allowfullscreen=""
              className="contact-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default ContactPage;

const css = {
  title: {
    color: "#fff",
    position: "relative",
    zIndex: "3 !important",
    textAlign: "center",
    paddingTop: "125px",
    paddingBottom: "125px",
    fontSize: "45px",
    lineHeight: "54px",
  },
  name: {
    fontSize: "55px",
    color: "#062e39",
    lineHeight: "66px",
  },
  input: {
    width: "350px",
    height: "50px",
    fontSize: "15px",
    color: "#000",
  },
  message: {
    fontSize: "15px",
    color: "#000",
    resize: "none",
    height: "150px",
    padding: "15px",
  },
  button: {
    marginTop: "24px",
    width: "180px",
    height: "50px",
    backgroundColor: "#062e39",
    color: "#fff",
    border: "2px solid #062e39",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "500 !important",
  },
};
