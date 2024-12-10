import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Question() {
  const { t } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("FAQs")}</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>{t("Frequently Asked Questions")}</Heading>
          <Text {...css.subtext}>
            {t(
              "Explore our comprehensive FAQ section, designed to answer all your queries and help you plan a seamless and unforgettable journey."
            )}
          </Text>
        </Flex>
        <Accordion mt={"60px"} defaultIndex={[0]} allowMultiple>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                How do I book a trip with your travel service?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel {...css.text} pb={4}>
              You can book a trip through our website, by calling our customer
              service hotline, or by visiting one of our offices. Simply choose
              your destination, travel dates, and preferred
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                How do I book a trip with your travel service?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel {...css.text} pb={4}>
              You can book a trip through our website, by calling our customer
              service hotline, or by visiting one of our offices. Simply choose
              your destination, travel dates, and preferred
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Question;

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
    width: "546px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: "400px",
  },
  items: {
    border: "1.5px solid rgba(162, 162, 162, 0.60)",
    borderRadius: "10px",
    width: "1024px",
    margin: "24px 0",
  },
  name: {
    color: "#000000",
    fontSize: "24px",
    lineHeight: "normal",
    letterSpacing: "0.24px",
    fontWeight: "500",
  },
  text: {
    color: "#676767",
    fontSize: "20px",
    lineHeight: "normal",
    letterSpacing: "0.2px",
    fontWeight: "400",
    width: "600px",
  },
};
