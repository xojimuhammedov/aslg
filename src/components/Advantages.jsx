import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import ArrowDown from "../assets/arrow-down-02.svg";

function Advantages() {
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>Adventages</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>Our Adventages</Heading>
          <Text {...css.subtext}>
            We make logistic shipping much easier and straighforward. Combining
            good service and technology make everything efficient
          </Text>
        </Flex>
        <SimpleGrid gap={"30px"} mt={"60px"} columns={3}>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>01</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>Precision in Delivery</Heading>
            <Text {...css.text}>
              With enhanced supply chain solution will accelerate your business
              while also driving efficiency
            </Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>02</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>Tailored Solutions, Every Time</Heading>
            <Text {...css.text}>
              With enhanced supply chain solution will accelerate your business
              while also driving efficiency
            </Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>03</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>Cutting-Edge technology</Heading>
            <Text {...css.text}>
              With enhanced supply chain solution will accelerate your business
              while also driving efficiency
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Advantages;

const css = {
  about: {
    background: "#F6F6F6",
    padding: "90px 0",
  },
  subname: {
    color: "#0563AB",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "30px",
  },
  title: {
    fontSize: "65px",
    lineHeight: "80px",
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#000000",
    width: "450px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: "400px",
  },
  item: {
    background: "3px 5px 12px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    padding: "30px",
  },
  text: {
    color: "#000",
    fontSize: "20px",
    lineHeight: "normal",
    fontWeight: "300",
    marginTop: "6px",
    letterSpacing: "0.2px",
  },
  name: {
    fontSize: "35px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "#000000",
    letterSpacing: "0.35px",
    width: "300px",
  },
  number: {
    fontSize: "60px",
    lineHeight: "normal",
    fontWeight: "400",
    letterSpacing: "0.6px",
  },
};
