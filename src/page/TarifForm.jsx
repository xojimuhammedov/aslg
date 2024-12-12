import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

import IconOne from "../assets/icon.svg";
import IconTwo from "../assets/icon1.svg";
import IconThree from "../assets/icon2.svg";
import IconFour from "../assets/icon3.svg";
import { useTranslation } from "react-i18next";

function TarifForm() {
  const { t } = useTranslation();
  return (
    <Box pb={"45px"}>
      <Box className="container">
        <Heading {...css.title}>Calculate your shipment</Heading>
        <SimpleGrid alignItems={"center"} columns={2} gap={"48px"}>
          <Box>
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder="От" />
              <Input {...css.input} placeholder="Место назначения" />
            </SimpleGrid>
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder="От" />
              <Input {...css.input} placeholder="Место назначения" />
            </SimpleGrid>
            <Textarea placeholder="Cargo information" {...css.inputs} />
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder="От" />
              <Input {...css.input} placeholder="Место назначения" />
            </SimpleGrid>
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder="От" />
              <Input {...css.input} placeholder="Место назначения" />
            </SimpleGrid>
            <Button {...css.button}>{t("Рассчитать")}</Button>
          </Box>
          <Box>
            <SimpleGrid gap={"24px"} columns={2}>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconOne} />
                  <Heading {...css.name}>Address delivery</Heading>
                </Flex>
                <Text {...css.text}>
                  Delivery to the recipient's address with a convenient time
                  specified
                </Text>
              </Box>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconTwo} />
                  <Heading {...css.name}>Address delivery</Heading>
                </Flex>
                <Text {...css.text}>
                  Delivery to the recipient's address with a convenient time
                  specified
                </Text>
              </Box>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconThree} />
                  <Heading {...css.name}>One way payment</Heading>
                </Flex>
                <Text {...css.text}>
                  You pay the cost of one-way transportation, you do not pay.
                </Text>
              </Box>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconFour} />
                  <Heading {...css.name}>
                    Delivery of cargo just in minute
                  </Heading>
                </Flex>
                <Text {...css.text}>
                  We guarantee high-quality delivery of cargo exactly on time.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TarifForm;

const css = {
  title: {
    fontSize: "25px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "#000000",
  },
  input: {
    border: "1px solid #9C9C9C",
    borderRadius: "18px",
    height: "45px",
    margin: "12px 0",

    _placeholder: {
      color: "#9C9C9C",
      lineHeight: "normal",
      fontWeight: "400",
    },
  },
  inputs: {
    border: "1px solid #9C9C9C",
    borderRadius: "18px",
    height: "120px",
    resize: "none",
    padding: "14px",

    _placeholder: {
      color: "#9C9C9C",
      lineHeight: "normal",
      fontWeight: "400",
    },
  },
  item: {
    background: "#F6F6F6",
    borderRadius: "10px",
    padding: "20px",
  },
  name: {
    fontSize: "20px",
    lineHeight: "normal",
    fontWeight: "600",
  },
  text: {
    fontSize: "20px",
    lineHeight: "normal",
    fontWeight: "400",
    marginTop: "15px",
  },
  button: {
    background: "#0563AB",
    borderRadius: "18px",
    color: "white",
    height: "45px",
    border: "2px solid #0563AB",
    width: "100%",
    lineHeight: "normal",
    fontFamily: "Inter",
    marginTop: "25px",

    _hover: {
      background: "#0563AB",
    },
  },
};
