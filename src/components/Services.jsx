import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import ServiceImage from "../assets/services.png";

function Services() {
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>Services</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>
            Discover The Full Range Of Services Wee Offer For Shipping
          </Heading>
          <Text {...css.subtext}>
            We make logistic shipping much easier and straighforward. Combining
            good service and technology make everything efficient
          </Text>
        </Flex>
        <SimpleGrid mt={"60px"} gap={"30px"} columns={3}>
          <Box>
            <Image src={ServiceImage} alt="ServiceImage" />
          </Box>
          <Box>
            <Image src={ServiceImage} alt="ServiceImage" />
          </Box>
          <Box>
            <Image src={ServiceImage} alt="ServiceImage" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  about: {
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
    width: "750px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: "400px",
  },
};
