import {
  border,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/tg.svg";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Heading mb={'24px'}>Logo</Heading>
        <SimpleGrid {...css.box} columns={4} spacing={10}>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>INFORMATION</Heading>
            <Link to={"/"}>
              <Text {...css.link}>Contact Us</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>About Us</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>FAQs</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Choose a Service</Text>
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>SERVICES</Heading>
            <Link to={"/"}>
              <Text {...css.link}>Update Personal Information</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Special Offers</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>SMS Services</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Contact Us</Text>
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>INTERNET</Heading>
            <Link to={"/"}>
              <Text {...css.link}>Contact Us</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Contact Us</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Contact Us</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Contact Us</Text>
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>FOLLOW US ON SOCIAL MEDIA</Heading>
            <Link to={"/"}>
              <Text {...css.link}>Join Us</Text>
            </Link>
            <Flex gap={"12px"}>
              <Image src={Instagram} alt="Instagram" />
              <Image src={Telegram} alt="Telegram" />
            </Flex>
          </Flex>
        </SimpleGrid>
        <Text
          color={"#fff"}
          fontSize={"16px"}
          textAlign={"center"}
          lineHeight={"24px"}
          mt={"40px"}>
          © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    background: "#0563AB",
    padding: "40px 0",
  },
  title: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "700",
  },
  link: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "500",
  },
  box: {
    borderBottom: "1px solid #fff",
    padding: "48px 0",
    borderTop: "1px solid #fff",
  },
};
